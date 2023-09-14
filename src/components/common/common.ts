import { styled } from "styled-components";

export const SectionTitle = styled.h3`
  color: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSize.title};
  line-height: ${(props) => props.theme.lineHeight.title};
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

export const SectionText = styled.p`
  color: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSize.default};
  line-height: ${(props) => props.theme.lineHeight.default};
`;

export const SectionLink = styled.a`
  color: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSize.default};
  line-height: ${(props) => props.theme.lineHeight.default};
  padding-right: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
