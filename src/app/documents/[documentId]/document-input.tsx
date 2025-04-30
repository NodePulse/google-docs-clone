"use client";

import { DocumentInputProps } from "@/types/type";
import { useMutation } from "convex/react";
import { useRef, useState } from "react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import { api } from "../../../../convex/_generated/api";
import { useDebounce } from "@/hooks/use-debounce";
import { toast } from "sonner";
import { useStatus } from "@liveblocks/react";
import { LoaderIcon } from "lucide-react";

const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const status = useStatus();

  const [value, setValue] = useState(title);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const debounceUpdate = useDebounce((newVal: string) => {
    if (newVal === title) return;

    setIsPending(true);
    mutate({ id, title: newVal })
      .then(() => toast.success("Document Renamed!"))
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsPending(false);
      });
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        toast.success("Document Renamed!");
        setIsEditing(false);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsPending(false);
      });
  };

  const mutate = useMutation(api.documents.updateById);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newvalue = e.target.value;
    setValue(newvalue);
    debounceUpdate(newvalue);
  };

  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="relative w-fit max-w-[50ch]">
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
            onBlur={() => setIsEditing(false)}
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => inputRef.current?.focus(), 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title}
        </span>
      )}
      {showError && <BsCloudSlash className="size-4" />}
      {!showError && !showLoader && <BsCloudCheck className="size-4" />}
      {showError && (
        <LoaderIcon className=" size-4 text-muted-foreground animate-spin" />
      )}
    </div>
  );
};

export default DocumentInput;
