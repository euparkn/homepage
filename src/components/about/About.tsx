import { styled } from "styled-components";

import { SectionText } from "components/_atoms/atoms";
import SectionInfo from "components/_molecules/SectionInfo";
import AboutLink from "components/about/AboutLink";

const NAME = process.env.REACT_APP_NAME;

function About() {
  return (
    <Container>
      <SectionInfo title={`Hi, I'm ${NAME}.`}>
        <SectionText>
          I&apos;m a Front-end developer who loves design and art.
        </SectionText>
      </SectionInfo>
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
export default About;
