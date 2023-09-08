import { SectionLink, SectionTitle } from "assets/styles/common";
import BlogList from "components/blog/List";
import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";
import { styled } from "styled-components";

function Blog() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <BlogList />
      </Sticky>
      {/* <Sticky height={30} heightTimes={1.5}>
        <BlogList />
      </Sticky> */}
    </Wrapper>
  );
}

export default Blog;
