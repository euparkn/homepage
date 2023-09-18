import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { Project } from "types/type";

function ProjectItem({ info }: { info?: Project }) {
  const theme = useContext(ThemeContext);

  if (!info) {
    return <Container $empty />;
  }

  const onClick = () => {
    window.open(info.url, "_blank");
  };

  return (
    <Container
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
    >
      <Background
        style={{
          backgroundImage: `url(images/${info.image}_${theme?.mode}.jpg)`,
        }}
      />
      <TextBox>
        <h6>{info.title}</h6>
        <p>
          <span>{info.date}</span>
          {info.description}
        </p>
      </TextBox>
    </Container>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.3s;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 8px;
  box-sizing: border-box;
  color: ${(props) => props.theme.font};
  opacity: 0;
  transition: 0.3s;
  > p {
    text-align: right;
    span {
      display: block;
      font-size: ${(props) => props.theme.fontSize.small};
      line-height: ${(props) => props.theme.lineHeight.small};
    }
  }
`;

const Container = styled.div<{ $empty?: boolean }>`
  cursor: ${(props) => (props.$empty ? "default" : "pointer")};
  width: calc(25% - 8px);
  max-width: 200px;
  margin: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.stroke};
  box-sizing: border-box;
  &:after {
    content: "";
    width: 100%;
    padding-bottom: 100%;
  }
  &:hover {
    ${Background} {
      transform: scale(105%);
      opacity: 0.3;
      filter: blur(5px);
    }
    ${TextBox} {
      opacity: 1;
    }
  }
  @media screen and (max-width: 540px) {
    width: calc(50% - 8px);
  }
  @media screen and (max-height: 564px) {
    max-width: 120px;
  }
`;

export default ProjectItem;
