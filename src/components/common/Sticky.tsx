import { ReactNode } from "react";
import { styled } from "styled-components";

const minHeight = 30;

function Sticky({
  height = minHeight,
  heightTimes = 1,
  children,
}: {
  height?: number;
  heightTimes?: number;
  children: ReactNode;
}) {
  return (
    <StickyContainer $height={height} $heightTimes={heightTimes}>
      {children}
    </StickyContainer>
  );
}

export const StickyContainer = styled.article<{
  $height: number;
  $heightTimes: number;
}>`
  width: 100%;
  height: ${(props) => props.$height}%;
  box-sizing: border-box;
  position: sticky;
  top: calc(50% - ${(props) => (props.$height / 2) * props.$heightTimes}%);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 45%;
    top: calc(50% - ${(props) => 22.5 * props.$heightTimes}%);
  }
`;

export default Sticky;
