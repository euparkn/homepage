import { useQuery } from "@tanstack/react-query";
import { getPostList } from "api/api";
import Figure from "components/blog/Figure";
import BlogList from "components/blog/List";
import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";

function Blog() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={50} heightTimes={1.5}>
        <a href="/">123</a>
        <h2>Post</h2>
        <BlogList />
      </Sticky>
    </Wrapper>
  );
}

export default Blog;
