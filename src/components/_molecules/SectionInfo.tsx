import { ReactNode } from "react";
import { styled } from "styled-components";

import { SectionTitle } from "components/_atoms/atoms";

function SectionInfo({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2rem;
`;

export default SectionInfo;
