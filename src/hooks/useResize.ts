import { useEffect, useState } from "react";
import { debounce } from "utils/debounce";

export const useResize = () => {
  const [screenHeight, setScreenHeight] = useState<number>(
    () => window.innerHeight
  );
  const [isMobile, setIsMobile] = useState(
    () => matchMedia("screen and (max-width: 540px)").matches
  );

  const resize = () => {
    setScreenHeight(window.innerHeight);
    setIsMobile(matchMedia("screen and (max-width: 540px)").matches);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(resize));
    return () => {
      window.removeEventListener("resize", debounce(resize));
    };
  }, []);

  return { screenHeight, isMobile };
};
