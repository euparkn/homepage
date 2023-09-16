import styled from "styled-components";

import ProjectList from "components/project/ProjectList";

function Project() {
  return (
    <Container>
      <ProjectList />
    </Container>
  );
}

const Container = styled.ul``;

export default Project;
