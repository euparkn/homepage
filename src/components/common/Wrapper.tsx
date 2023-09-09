import { ReactNode } from "react";
import { styled } from "styled-components";

import { useScreenHeight } from "hooks/useScreenHeight";

function Wrapper({
  heightTimes = 1,
  children,
}: {
  heightTimes?: number;
  children: ReactNode;
}) {
  const screenHeight = useScreenHeight();

  return (
    <Container $screenHeight={screenHeight} $heightTimes={heightTimes}>
      {children}
    </Container>
  );
}

const Container = styled.section<{
  $screenHeight: number;
  $heightTimes: number;
}>`
  height: ${(props) => props.$screenHeight * props.$heightTimes}px;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  border-left: 2px double #aaa;
  border-right: 2px double #aaa;
  padding: 0 32px;
  margin: 0 12px 400px;
`;

export default Wrapper;
