import { useState } from "react";

function useContextMenu() {
  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0,
  };
  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  const handleContextMenu = (ev) => {
    const { pageX, pageY } = ev;
    setContextMenu({
      show: true,
      x: pageX + 10,
      y: pageY - 45,
    });
    ev.preventDefault();
  };

  const handleCloseMenu = () => {
    setContextMenu(initialContextMenu);
  };

  return [contextMenu, handleContextMenu, handleCloseMenu];
}

export default useContextMenu;
