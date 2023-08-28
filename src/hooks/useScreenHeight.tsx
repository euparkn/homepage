import { useEffect, useState } from "react";

export const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState<number>(
    () => window.innerHeight
  );

  const resize = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return screenHeight;
};
