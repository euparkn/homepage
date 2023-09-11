import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  elementRef: RefObject<Element> | null,
  options?: IntersectionObserverInit
) => {
  const [isInView, setIsInView] = useState(false);

  const callback = ([entry]: IntersectionObserverEntry[]) => {
    if (!entry || !entry.target) {
      return;
    }
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    if (!elementRef || !elementRef.current) {
      return () => false;
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [callback, elementRef]);

  return { isInView };
};
