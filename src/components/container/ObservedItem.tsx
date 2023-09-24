import { ReactNode, useRef } from "react";
import { styled } from "styled-components";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

function ObservedItem({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useIntersectionObserver(ref);

  return (
    <ObservedBox ref={ref} style={{ opacity: isInView ? 1 : 0 }}>
      {children}
    </ObservedBox>
  );
}

const ObservedBox = styled.div`
  height: 100%;
  transition: 1.5s;
`;

export default ObservedItem;
