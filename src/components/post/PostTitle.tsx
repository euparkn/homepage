import { styled } from "styled-components";

import { SectionLink, SectionTitle } from "components/_atoms/atoms";

const BLOG_URL = process.env.REACT_APP_BLOG_URL;

function PostTitle() {
  return (
    <Container>
      <SectionTitle>Post</SectionTitle>
      <SectionLink href={BLOG_URL} target="_blank">
        more...
      </SectionLink>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2rem;
`;

export default PostTitle;
