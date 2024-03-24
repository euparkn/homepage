import { useRecoilValue } from "recoil";
import { ThemeProvider, styled } from "styled-components";

import { dark, light } from "assets/styles/theme";

import { optionAtom } from "store";

import MainContent from "pages/MainContent";
import AboutContent from "pages/AboutContent";
import PostContent from "pages/PostContent";
import ProjectContent from "pages/ProjectContent";

import Header from "components/header/Header";
import Footer from "components/footer/Footer";

function App() {
  const option = useRecoilValue(optionAtom);

  const { darkMode } = option;

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      {/* <MouseEffect /> */}
      <Header />
      <Wrapper>
        <MainContent />
        <AboutContent />
        <ProjectContent />
        {/* <PostContent /> - 티스토리 Open API 종료로 인해 숨김 */}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
