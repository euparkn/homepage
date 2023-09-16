import ObservedItem from "components/container/ObservedItem";
import Sticky from "components/container/Sticky";
import Wrapper from "components/container/Wrapper";
import Project from "components/project/Project";

function ProjectContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <ObservedItem>
          <Project />
        </ObservedItem>
      </Sticky>
    </Wrapper>
  );
}

export default ProjectContent;
