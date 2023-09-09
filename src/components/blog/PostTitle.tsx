import { SectionLink, SectionTitle } from "components/common/common";

const BLOG_URL = process.env.REACT_APP_BLOG_URL;

function PostTitle() {
  return (
    <div>
      <SectionTitle>Post</SectionTitle>
      <SectionLink href={BLOG_URL} target="_blank">
        more...
      </SectionLink>
    </div>
  );
}

export default PostTitle;
