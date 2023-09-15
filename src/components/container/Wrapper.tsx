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

const Container = styled.section<{
  $heightTimes: number;
}>`
  height: calc(${(props) => 100 * props.$heightTimes}%);
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  border-left: 3px double ${(props) => props.theme.stroke};
  border-right: 3px double ${(props) => props.theme.stroke};
  padding: 0 32px;
  margin: 0 4px 300px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 12px;
    flex-direction: column;
  }
`;

export default Wrapper;
