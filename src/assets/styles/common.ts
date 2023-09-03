import { styled } from "styled-components";

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  color: #111;
`;

export const SectionLink = styled.a`
  font-size: 1rem;
  line-height: 1.5rem;
  padding-right: 8px;
  color: #111;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
