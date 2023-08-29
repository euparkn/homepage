import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";
import { styled } from "styled-components";

function Main() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky heightTimes={1.5}>
        <Title>Main1</Title>
      </Sticky>
    </Wrapper>
  );
}

const Title = styled.h1`
  width: 100%;
  height: 50px;
  line-height: 50px;
`;

export default Main;