import { useEffect, useState } from "react";
import { debounce } from "utils/debounce";

export const useResize = () => {
  const [isMobile, setIsMobile] = useState(
    () => matchMedia("screen and (max-width: 540px)").matches
  );

  const resize = () => {
    setIsMobile(matchMedia("screen and (max-width: 540px)").matches);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(resize));
    window.dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("resize", debounce(resize));
    };
  }, []);

  return { isMobile };
};
