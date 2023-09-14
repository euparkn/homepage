import { ReactNode, useRef } from "react";
import { styled } from "styled-components";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";

function ObservedItem({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useIntersectionObserver(ref);

  return (
    <ObservedBox ref={ref} $isInView={isInView}>
      {children}
    </ObservedBox>
  );
}

const ObservedBox = styled.div<{ $isInView: boolean }>`
  height: 100%;
  opacity: ${(props) => (props.$isInView ? 1 : 0)};
  transition: 2s ease-in-out;
`;

export default ObservedItem;
