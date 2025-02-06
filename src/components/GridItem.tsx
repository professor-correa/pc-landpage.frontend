import { motion } from "framer-motion";
import { GridItem as GridItemType, Position } from "../types";

const SIZES: Record<GridItemType["size"], { desktop: [number, number]; mobile: [number, number] }> = {
  square: { desktop: [280, 280], mobile: [170, 170] },
  horizontal: { desktop: [576, 280], mobile: [350, 170] },
  vertical: { desktop: [280, 576], mobile: [170, 350] },
};

interface GridItemProps {
  item: GridItemType;
  isMobile: boolean;
  onDragEnd: (id: number, x: number, y: number) => void;
  initialPosition: Position;
}

const GridItem = ({ item, isMobile, onDragEnd, initialPosition }: GridItemProps) => {
  const [width, height] = SIZES[item.size][isMobile ? "mobile" : "desktop"];

  return (
    <motion.div
      className={`grid-item ${item.size}`}
      drag={!isMobile}
      dragConstraints={{ left: 0, right: 1168 - width, top: 0, bottom: 1168 - height }}
      onDragEnd={(e, info) => onDragEnd(item.id, info.point.x, info.point.y)}
      animate={{ x: item.x ?? initialPosition.x, y: item.y ?? initialPosition.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ width, height }}
    >
      {item.content}
    </motion.div>
  );
};

export default GridItem;
