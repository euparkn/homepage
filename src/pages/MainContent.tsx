import { styled } from "styled-components";

import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";
import Background from "components/Background";
import ObservedItem from "components/common/ObservedItem";

const NAME = process.env.REACT_APP_NAME;

function MainContent() {
  return (
    <Wrapper heightTimes={2}>
      <Background />
      <Sticky heightTimes={2}>
        <ObservedItem>
          <Container>
            <Title>{NAME}</Title>
          </Container>
        </ObservedItem>
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
  position: relative;
`;

const Title = styled.h1`
  width: 100%;
  height: 50px;
  line-height: 4rem;
  text-align: center;
  color: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSize.mainTitle};
  font-weight: 700;
`;

export default MainContent;
