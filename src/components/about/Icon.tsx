import { ReactNode } from "react";
import { styled } from "styled-components";

function Icon({
  src,
  text,
  color,
  textColor = "#fff",
}: {
  src: ReactNode;
  text: string;
  color: string;
  textColor?: string;
}) {
  return (
    <Box $color={color} $textColor={textColor}>
      <p>{text}</p>
      {src}
    </Box>
  );
}

const Box = styled.div<{ $color: string; $textColor: string }>`
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 32px;
    height: 32px;
    transition: 0.2s;
  }
  p {
    background-color: ${(props) => props.$color};
    color: ${(props) => props.$textColor};
    font-size: ${(props) => props.theme.fontSize.small};
    padding: 4px 8px;
    line-height: ${(props) => props.theme.fontSize.small};
    font-weight: 700;
    transition: 0.2s;
    border-radius: 1px;
    margin-right: 8px;
    display: none;
  }
  &:hover {
    svg {
      padding-right: 8px;
    }
    p {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    &:hover {
      svg {
        display: none;
      }
      p {
        margin: 0;
      }
    }
  }
  @media screen and (max-height: 564px) {
    min-height: 20px;
    svg {
      display: none;
    }
    p {
      display: block;
      margin: 0;
    }
  }
`;

export default Icon;
