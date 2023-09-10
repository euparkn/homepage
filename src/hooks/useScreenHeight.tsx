import { useEffect, useState } from "react";
import { debounce } from "utils/debounce";

export const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState<number>(
    () => window.innerHeight
  );

  const resize = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(resize));
    return () => {
      window.removeEventListener("resize", debounce(resize));
    };
  }, []);

  return screenHeight;
};
