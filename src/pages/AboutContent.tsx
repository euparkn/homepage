import Sticky from "components/container/Sticky";
import Wrapper from "components/container/Wrapper";
import AboutStack from "components/about/AboutStack";
import AboutInfo from "components/about/AboutInfo";
import ObservedItem from "components/container/ObservedItem";

function AboutContent() {
  return (
    <Wrapper heightTimes={1.5}>
      <Sticky height={30} heightTimes={1.5} style={{ zIndex: 10 }}>
        <ObservedItem>
          <AboutInfo />
        </ObservedItem>
      </Sticky>
      <Sticky height={50} heightTimes={1.5}>
        <AboutStack />
      </Sticky>
    </Wrapper>
  );
}

export default AboutContent;
