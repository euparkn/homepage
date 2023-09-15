import PostList from "components/post/PostList";
import ObservedItem from "components/container/ObservedItem";
import Sticky from "components/container/Sticky";
import Wrapper from "components/container/Wrapper";
import styled from "styled-components";
import PostTitle from "components/post/PostTitle";

function PostContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <ObservedItem>
          <Container>
            <PostTitle />
            <PostList />
          </Container>
        </ObservedItem>
      </Sticky>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    overflow: auto;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export default PostContent;
