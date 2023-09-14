import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState<number>(() => window.scrollY);
  const scrollHeight = document.body.scrollHeight - window.innerHeight;

  const scroll = () => {
    if (window.scrollY < 0) {
      return;
    }
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return { scrollTop, scrollHeight };
};
