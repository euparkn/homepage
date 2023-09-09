import { styled } from "styled-components";

import { SectionText, SectionTitle } from "components/common/common";

const NAME = process.env.REACT_APP_NAME;

function AboutInfo() {
  return (
    <Container>
      <SectionTitle>Hi, I&apos;m {NAME}.</SectionTitle>
      <SectionText>
        I&apos;m a Front-end developer who loves design and art.
      </SectionText>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 3rem;
`;
export default AboutInfo;
