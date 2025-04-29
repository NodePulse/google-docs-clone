import { LucideIcon } from "lucide-react";
import { Doc } from "../../convex/_generated/dataModel";
import { PaginationStatus } from "convex/react";

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
