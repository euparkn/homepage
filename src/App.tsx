import Main from "pages/Main";
import About from "pages/About";
import Blog from "pages/Blog";
import { styled } from "styled-components";
import Footer from "components/footer/Footer";

function App() {
  return (
    <>
      <Bg />
      <Wrapper>
        <Main />
        <About />
        <Blog />
        <Footer />
      </Wrapper>
    </>
  );
}

const Bg = styled.canvas`
  width: 100%;
  height: 100%;
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
