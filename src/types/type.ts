import { LucideIcon } from "lucide-react";
import { Doc, Id } from "../../convex/_generated/dataModel";
import { PaginationStatus, Preloaded } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";

export interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

export interface MarkerProps {
  position: number;
  isLeft: boolean;
  isDragging: boolean;
  onMouseDown: () => void;
  onDoubleClick: () => void;
}

export interface FullScreenLoaderProps {
  label?: string;
  className?: string;
}

export interface DocumentsTableProps {
  documents: Doc<"documents">[] | undefined;
  loadMore: (numItems: number) => void;
  status: PaginationStatus;
}

export interface DocumentRowProps {
  document: Doc<"documents">;
}

export interface DocumentMenuProps {
  documentId: Id<"documents">;
  title: string;
  onNewTab: (id: Id<"documents">) => void;
}

export interface RemoveDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

export interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTitle: string;
  children: React.ReactNode;
}
export type User = {
  id: string;
  name: string;
  avatar: string;
  color: string;
};
export interface AvatarProps {
  src: string;
  name: string;
}

export interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

export interface NavbarProps {
  data: Doc<"documents">;
}

export interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export interface EditorProps {
  initialContent?: string | undefined;
}
