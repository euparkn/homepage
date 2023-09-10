import { useState } from "react";
import { ThemeProvider, styled } from "styled-components";

import { dark, light } from "assets/styles/theme";

import MainContent from "pages/MainContent";
import AboutContent from "pages/AboutContent";
import PostContent from "pages/PostContent";

import Footer from "components/footer/Footer";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <ThemeProvider theme={mode === "light" ? light : dark}>
      <Wrapper>
        <MainContent />
        <AboutContent />
        <PostContent />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default App;
