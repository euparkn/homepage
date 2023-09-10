import { ReactNode, useRef } from "react";
import { styled } from "styled-components";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

function ObservedItem({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { ratio } = useIntersectionObserver(ref, {
    threshold: Array(10)
      .fill(0)
      .map((el, i) => i / 10),
  });

  return (
    <ObservedBox ref={ref} style={{ opacity: ratio }}>
      {children}
    </ObservedBox>
  );
}

const ObservedBox = styled.div``;

export default ObservedItem;
