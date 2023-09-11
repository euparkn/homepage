import { styled } from "styled-components";

import AboutLink from "components/about/AboutLink";
import { SectionText, SectionTitle } from "components/common/common";

const NAME = process.env.REACT_APP_NAME;

function AboutInfo() {
  return (
    <Container>
      <SectionTitle>Hi, I&apos;m {NAME}.</SectionTitle>
      <SectionText>
        I&apos;m a Front-end developer who loves design and art.
      </SectionText>
      <AboutLink />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export default AboutInfo;
