import { useEffect, useState } from "react";
import { styled } from "styled-components";

import { ReactComponent as Name } from "assets/images/name.svg";
import { ReactComponent as NameVertical } from "assets/images/name_vertical.svg";
import bgImg from "assets/images/bg_light.jpg";

import { useResize } from "hooks/useResize";

function Background() {
  const [scrollTop, setScrollTop] = useState<number>(() => window.scrollY);
  const { isMobile } = useResize();

  const scroll = () => {
    if (window.scrollY < 0) {
      return;
    }
    setScrollTop(window.scrollY);
  };

  const length = window.outerHeight;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;

  const line1 = scrollHeight - scrollTop;
  const line2 = scrollHeight - scrollTop + 400;

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
          <NameVertical strokeDasharray={length} strokeDashoffset={line1} />
          <NameVertical strokeDasharray={length} strokeDashoffset={line2} />
        </SvgWrapper>
      ) : (
        <SvgWrapper>
          <Name />
          <Name strokeDasharray={length} strokeDashoffset={line1} />
          <Name strokeDasharray={length} strokeDashoffset={line2} />
        </SvgWrapper>
      )}
    </Bg>
  );
}

const SvgWrapper = styled.div`
  width: 120vw;
  height: 110vh;
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
