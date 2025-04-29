import { LucideIcon } from "lucide-react";
import { Doc, Id } from "../../convex/_generated/dataModel";
import { PaginationStatus } from "convex/react";
import React from "react";

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
