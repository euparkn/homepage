import Icon from "components/about/Icon";
import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";

function About() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <h2>text</h2>
        <p>mail</p>
        <p>github</p>
        <p>blog</p>
      </Sticky>
      <Sticky height={50} heightTimes={1.5}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </Sticky>
    </Wrapper>
  );
}

export default About;
