import PostList from "components/blog/PostList";
import ObservedItem from "components/common/ObservedItem";
import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";

function PostContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <ObservedItem>
          <PostList />
        </ObservedItem>
      </Sticky>
    </Wrapper>
  );
}

export default PostContent;
