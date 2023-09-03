import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";
import { styled } from "styled-components";

const GITHUB_ID = process.env.REACT_APP_GITHUB_ID;
const NAME = process.env.REACT_APP_NAME;

function Main() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky heightTimes={1.5}>
        <Title>{NAME}</Title>
        <Title>@{GITHUB_ID}</Title>
      </Sticky>
    </Wrapper>
  );
}

const Title = styled.h1`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 3rem;
`;

export default Main;
