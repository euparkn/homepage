import { useEffect, useState } from "react";
import { styled } from "styled-components";

import { useResize } from "hooks/useResize";

import { ReactComponent as Name } from "assets/images/name.svg";
import { ReactComponent as NameVertical } from "assets/images/name_vertical.svg";

import bgImg from "assets/images/bg_light.jpg";

function Background() {
  const [scrollTop, setScrollTop] = useState<number>(() => window.scrollY);

  const scroll = () => {
    setScrollTop(window.scrollY);
  };

  const { isMobile } = useResize();
  const screenHeight = document.body.scrollHeight - window.innerHeight;

  const length = screenHeight / 4;
  const move = length - scrollTop / 4;
  const move2 = length - scrollTop / 4 - 1000;

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <Bg>
      {isMobile ? (
        <SvgWrapper>
          <NameVertical />
          <NameVertical strokeDasharray={length} strokeDashoffset={move} />
          <NameVertical strokeDasharray={length} strokeDashoffset={move2} />
        </SvgWrapper>
      ) : (
        <SvgWrapper>
          <Name />
          <Name strokeDasharray={length} strokeDashoffset={move} />
          <Name strokeDasharray={length} strokeDashoffset={move2} />
        </SvgWrapper>
      )}
    </Bg>
  );
}

const SvgWrapper = styled.div`
  width: 130%;
  height: 100%;
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
