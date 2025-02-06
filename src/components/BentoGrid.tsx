import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GridItemComponent from "./GridItem";
import { GridItem, Position } from "../types";
import "./styles/BentoGrid.css";

const GRID_SIZE = 4; // 4x4 Grid
const BOX_SIZE = 280; // Tamanho do quadrado no Desktop
const GAP = 16; // Espaçamento entre os blocos

const POSITIONS: Position[] = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => ({
  x: (index % GRID_SIZE) * (BOX_SIZE + GAP),
  y: Math.floor(index / GRID_SIZE) * (BOX_SIZE + GAP),
}));

const initialItems: GridItem[] = [
  { id: 1, size: "square", content: "Code Trouble" },
  { id: 2, size: "horizontal", content: "Suporte de Domingo" },
  { id: 3, size: "vertical", content: "Livro Atual" },
  { id: 4, size: "square", content: "Instagram" },
  { id: 5, size: "horizontal", content: "A estrada até aqui" },
  { id: 6, size: "vertical", content: "Prof Corrêa" },
  { id: 7, size: "square", content: "Toggle" },
  { id: 8, size: "square", content: "Não sei" },
];

const BentoGrid = () => {
  const [items, setItems] = useState<GridItem[]>(initialItems);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getClosestSlot = (x: number, y: number): Position => {
    return POSITIONS.reduce((closest, slot) =>
      Math.hypot(slot.x - x, slot.y - y) < Math.hypot(closest.x - x, closest.y - y) ? slot : closest
    );
  };

  const updateItemPosition = (id: number, x: number, y: number) => {
    const closestSlot = getClosestSlot(x, y);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, x: closestSlot.x, y: closestSlot.y } : item))
    );
  };

  return (
    <div className="bento-container">
      <div
        className="grid"
        style={{
          width: isMobile ? 350 : 1168,
          height: isMobile ? "auto" : 1168,
        }}
      >
        {items.map((item, index) => (
          <GridItemComponent
            key={item.id}
            item={item}
            isMobile={isMobile}
            onDragEnd={updateItemPosition}
            initialPosition={POSITIONS[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
