import ObservedItem from "components/container/ObservedItem";
import Sticky from "components/container/Sticky";
import Wrapper from "components/container/Wrapper";
import Post from "components/post/Post";

function PostContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <ObservedItem>
          <Post />
        </ObservedItem>
      </Sticky>
    </Wrapper>
  );
}

export default PostContent;
