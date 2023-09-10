import { styled } from "styled-components";

function Loading() {
  return <Spinner />;
}

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    display: block;
    width: 42px;
    height: 42px;
    border: 6px solid #111;
    border-right-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 1.2s ease-out infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
