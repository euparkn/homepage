import { useEffect, useState } from "react";
import { styled } from "styled-components";

import { ReactComponent as Name } from "assets/images/name.svg";
import { ReactComponent as NameVertical } from "assets/images/name_vertical.svg";
import bgImg from "assets/images/bg_light.jpg";

import { Size } from "types/type";
import { useResize } from "hooks/useResize";

function Background() {
  const [scrollTop, setScrollTop] = useState<number>(() => window.scrollY);
  const { outer, isMobile } = useResize();

  const scroll = () => {
    if (window.scrollY < 0) {
      return;
    }
    setScrollTop(window.scrollY);
  };

  const length = outer.height;
  const move = length - scrollTop;
  const move2 = length - scrollTop - 200;

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <Bg>
      {isMobile ? (
        <SvgWrapper $outer={outer}>
          <NameVertical />
          <NameVertical strokeDasharray={length} strokeDashoffset={move} />
          <NameVertical strokeDasharray={length} strokeDashoffset={move2} />
        </SvgWrapper>
      ) : (
        <SvgWrapper $outer={outer}>
          <Name />
          <Name strokeDasharray={length} strokeDashoffset={move} />
          <Name strokeDasharray={length} strokeDashoffset={move2} />
        </SvgWrapper>
      )}
    </Bg>
  );
}

const SvgWrapper = styled.div<{ $outer: Size }>`
  width: ${(props) => props.$outer.width * 1.3}px;
  height: ${(props) => props.$outer.height * 1.1}px;
  position: absolute;
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    &:first-child {
      path {
        stroke: #aaa;
      }
    }
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgImg}) center no-repeat;
  background-size: cover;
  filter: invert(${(props) => (props.theme.mode === "light" ? "0%" : "100%")});
`;

export default Background;
