"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import FullScreenLoader from "@/components/FullScreenLoader";
import { User } from "@/types/type";
import { getUsers } from "./actions";
import { toast } from "sonner";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();

  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const list = await getUsers();
        setUsers(list);
      } catch {
        toast.error("Failed to fetch users");
      }
    },
    []
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={({ userIds }) => {
        return userIds.map((userId) =>
          users.find((user) => user.id === userId)
        );
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;

        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        }
        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={() => []}
    >
      {params.documentId && (
        <RoomProvider id={params.documentId as string}>
          <ClientSideSuspense
            fallback={<FullScreenLoader label="Room loading..." />}
          >
            {children}
          </ClientSideSuspense>
        </RoomProvider>
      )}
    </LiveblocksProvider>
  );
}
