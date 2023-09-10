import { useEffect, useState } from "react";
import { styled } from "styled-components";

import { useScreenHeight } from "hooks/useScreenHeight";

import { ReactComponent as Name } from "assets/images/name.svg";
import bgImg from "assets/images/bg_light.jpg";

function Background() {
  const [scrollTop, setScrollTop] = useState<number>(() => window.scrollY);

  const scroll = () => {
    setScrollTop(window.scrollY);
  };

  const screenHeight = useScreenHeight();
  // const screenHeight = document.body.scrollHeight;

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <Bg>
      <Name />
      <Name
        strokeDasharray={screenHeight}
        strokeDashoffset={screenHeight - scrollTop}
      />
    </Bg>
  );
}

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
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(125%);
    opacity: 0.1;
    &:first-child {
      path {
        stroke: #aaa;
      }
    }
  }
`;

export default Background;
