import { ReactNode } from "react";
import { styled } from "styled-components";

function Wrapper({
  heightTimes = 1,
  children,
}: {
  heightTimes?: number;
  children: ReactNode;
}) {
  return <Container $heightTimes={heightTimes}>{children}</Container>;
}

const Container = styled.section<{ $heightTimes: number }>`
  height: ${(props) => window.innerHeight * props.$heightTimes}px;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 0 32px;
  margin: 0 12px 300px;
`;

export default Wrapper;
