import { useEffect, useState } from "react";

export const useMouseMove = () => {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const setCoordinateHandle = (e: MouseEvent) => {
    setCoordinate({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", setCoordinateHandle);
    return () => {
      window.removeEventListener("mousemove", setCoordinateHandle);
    };
  }, []);

  return { coordinate };
};
