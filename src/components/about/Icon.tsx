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
    padding: 0 8px;
    line-height: 1.5rem;
    font-size: 0.85rem;
    font-weight: 700;
    transition: 0.2s;
    border-radius: 1px;
    margin-right: 8px;
    padding-top: 2px;
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
`;

export default Icon;
