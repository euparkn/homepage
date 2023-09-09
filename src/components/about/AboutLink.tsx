import { styled } from "styled-components";

import { SectionLink, SectionText } from "components/common/common";

import { ReactComponent as GmailIcon } from "assets/icons/gmail-#EA4335.svg";
import { ReactComponent as GithubIcon } from "assets/icons/github-#181717.svg";
import { ReactComponent as BlogIcon } from "assets/icons/tistory-#000000.svg";

const GITHUB_ID = process.env.REACT_APP_GITHUB_ID;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const BLOG = process.env.REACT_APP_BLOG;
const BLOG_URL = process.env.REACT_APP_BLOG_URL;

const EMAIL = process.env.REACT_APP_EMAIL;

function AboutLink() {
  return (
    <ul>
      <InfoBox>
        <GithubIcon />
        <SectionLink href={GITHUB_URL} target="blank">
          @{GITHUB_ID}
        </SectionLink>
      </InfoBox>
      <InfoBox>
        <GmailIcon />
        <SectionText>{EMAIL}</SectionText>
      </InfoBox>
      <InfoBox>
        <BlogIcon />
        <SectionLink href={BLOG_URL} target="blank">
          {BLOG}
        </SectionLink>
      </InfoBox>
    </ul>
  );
}

const InfoBox = styled.li`
  height: 1.5rem;
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;

export default AboutLink;
