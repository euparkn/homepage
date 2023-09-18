import styled from "styled-components";

import ProjectList from "components/project/ProjectList";
import SectionInfo from "components/_molecules/SectionInfo";

function Project() {
  return (
    <Container>
      <SectionInfo title="Ideas" />
      <ProjectList />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Project;
