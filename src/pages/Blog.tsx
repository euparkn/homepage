import BlogList from "components/blog/List";
import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";

function Blog() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <BlogList />
      </Sticky>
    </Wrapper>
  );
}

export default Blog;
