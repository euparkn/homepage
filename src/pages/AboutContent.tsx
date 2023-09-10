import Sticky from "components/common/Sticky";
import Wrapper from "components/common/Wrapper";
import AboutStack from "components/about/AboutStack";
import AboutInfo from "components/about/AboutInfo";
import AboutLink from "components/about/AboutLink";

function AboutContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5}>
        <AboutInfo />
        <AboutLink />
      </Sticky>
      <Sticky height={50} heightTimes={1.5}>
        <AboutStack />
      </Sticky>
    </Wrapper>
  );
}

export default AboutContent;