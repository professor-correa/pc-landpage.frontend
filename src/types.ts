export type GridItemType = "square" | "horizontal" | "vertical";

export interface GridItem {
  id: number;
  size: GridItemType;
  content: string;
  x?: number;
  y?: number;
}

export interface Position {
  x: number;
  y: number;
}
