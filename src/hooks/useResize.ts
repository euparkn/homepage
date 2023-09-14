import { useEffect, useState } from "react";
import { Size } from "types/type";
import { debounce } from "utils/debounce";

export const useResize = () => {
  const [outer, setOuter] = useState<Size>({
    width: window.outerWidth,
    height: window.outerHeight,
  });
  const [isMobile, setIsMobile] = useState(
    () => matchMedia("screen and (max-width: 540px)").matches
  );

  const resize = () => {
    setOuter({ width: window.outerWidth, height: window.outerHeight });
    setIsMobile(matchMedia("screen and (max-width: 540px)").matches);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(resize));
    window.dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("resize", debounce(resize));
    };
  }, []);

  return { outer, isMobile };
};
