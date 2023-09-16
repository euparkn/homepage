import styled from "styled-components";

import { SectionLink } from "components/_atoms/atoms";
import SectionInfo from "components/_molecules/SectionInfo";
import PostList from "components/post/PostList";

const BLOG_URL = process.env.REACT_APP_BLOG_URL;

function Post() {
  return (
    <Container>
      <SectionInfo title="Post">
        <SectionLink href={BLOG_URL} target="_blank">
          more...
        </SectionLink>
      </SectionInfo>
      <PostList />
    </Container>
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

export default Post;
