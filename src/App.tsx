import { styled } from "styled-components";

import MainContent from "pages/MainContent";
import AboutContent from "pages/AboutContent";
import PostContent from "pages/PostContent";
import Footer from "components/footer/Footer";

function App() {
  return (
    <Wrapper>
      <MainContent />
      <AboutContent />
      <PostContent />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
