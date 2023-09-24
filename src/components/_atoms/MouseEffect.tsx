import styled from "styled-components";

import { useMouseMove } from "hooks/useMouseMove";

function MouseEffect() {
  const { coordinate } = useMouseMove();

  return (
    <Point
      style={{
        transform: `translate(${coordinate.x}px, ${coordinate.y}px) translate(-50%, -50%)`,
      }}
    />
  );
}

const Point = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 50px ${(props) => props.theme.background};
  border-radius: 50%;
  z-index: 0;
  will-change: transform;
`;

export default MouseEffect;
