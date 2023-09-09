import { styled } from "styled-components";

import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";

const NAME = process.env.REACT_APP_NAME;

function MainContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky heightTimes={1.5}>
        <Container>
          <Title>{NAME}</Title>
        </Container>
      </Sticky>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  height: 50px;
  line-height: 4rem;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
`;

export default MainContent;
