import { FullScreenLoaderProps } from "@/types/type";
import { LoaderIcon } from "lucide-react";

const FullScreenLoader = (loader: FullScreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <LoaderIcon className="size-6 text-muted-foreground animate-spin" />
      {loader.label && (
        <p className="text-sm text-muted-foreground">{loader.label}</p>
      )}
    </div>
  );
};

export default FullScreenLoader;
