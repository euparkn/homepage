import Main from "pages/Main";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <Bg />
      <Wrapper>
        <Main />
      </Wrapper>
    </>
  );
}

const Bg = styled.canvas`
  width: 100%;
  height: ${window.innerHeight}px;
  background-color: orange;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
