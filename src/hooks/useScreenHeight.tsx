import { useEffect, useState } from "react";

export const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState<number>(
    () => window.innerHeight
  );

  const debounce = (callback: () => void) => {
    let val: ReturnType<typeof setTimeout>;
    return () => {
      clearTimeout(val);
      val = setTimeout(() => {
        callback();
      }, 500);
    };
  };

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
