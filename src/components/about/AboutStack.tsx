import { styled } from "styled-components";

import Icon from "components/about/Icon";

import { ReactComponent as ReactIcon } from "assets/icons/react-#61DAFB.svg";
import { ReactComponent as HtmlIcon } from "assets/icons/html5-#E34F26.svg";
import { ReactComponent as JsIcon } from "assets/icons/javascript-#F7DF1E.svg";
import { ReactComponent as CssIcon } from "assets/icons/css3-#1572B6.svg";
import { ReactComponent as TsIcon } from "assets/icons/typescript-#3178C6.svg";
import { ReactComponent as UnityIcon } from "assets/icons/unity-#FFFFFF.svg";
import { ReactComponent as ScIcon } from "assets/icons/styledcomponents-#DB7093.svg";
import { ReactComponent as SassIcon } from "assets/icons/sass-#CC6699.svg";
import { ReactComponent as GitIcon } from "assets/icons/git-#F05032.svg";
import { ReactComponent as FigmaIcon } from "assets/icons/figma-#F24E1E.svg";
import { ReactComponent as DockerIcon } from "assets/icons/docker-#2496ED.svg";

function AboutStack() {
  return (
    <Stack>
      <Icon
        src={<JsIcon />}
        text="JavaScript"
        textColor="#111"
        color="#F7DF1E"
      />
      <Icon src={<TsIcon />} text="TypeScript" color="#3178C6" />
      <Icon src={<ReactIcon />} text="React" textColor="#111" color="#61DAFB" />
      <Icon src={<HtmlIcon />} text="HTML5" color="#E34F26" />
      <Icon src={<CssIcon />} text="CSS3" color="#1572B6" />
      <Icon src={<ScIcon />} text="Styled-Component" color="#DB7093" />
      <Icon src={<SassIcon />} text="Sass" color="#CC6699" />
      <Icon src={<UnityIcon />} text="Unity" color="#000000" />
      <Icon src={<FigmaIcon />} text="Figma" color="#F24E1E" />
      <Icon src={<GitIcon />} text="Git" color="#F05032" />
      <Icon src={<DockerIcon />} text="Docker" color="#2496ED" />
    </Stack>
  );
}

const Stack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
`;

export default AboutStack;
