import { useState } from "react";

const useMouseDrag = () => {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const mouseDown = (ev) => {
    setInitialPosition({
      x: ev.clientX,
      y: ev.clientY,
    });
    setDragging(true);
  };

  const mouseMove = (e) => {
    if (!dragging) {
      return;
    }
    if (dragging) {
      const deltaX = e.clientX - initialPosition.x;
      const deltaY = e.clientY - initialPosition.y;
      requestAnimationFrame(() => {
        setPosition({
          x: position.x + deltaX,
          y: position.y + deltaY,
        });
      });

      setInitialPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const mouseUp = () => {
    setDragging(false);
  };
  return { mouseDown, mouseMove, mouseUp, position };
};

export default useMouseDrag;
