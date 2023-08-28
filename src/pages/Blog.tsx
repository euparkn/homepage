import Figure from "components/blog/Figure";
import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";

function Blog() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={50} heightTimes={1.5}>
        <h2>Post</h2>
        <div>
          <Figure />
          <Figure />
          <Figure />
          <Figure />
          <Figure />
          <Figure />
        </div>
        <a href="/">123</a>
      </Sticky>
    </Wrapper>
  );
}

export default Blog;
