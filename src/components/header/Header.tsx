import { styled } from "styled-components";

import ModeSwitch from "components/header/ModeSwitch";

function Header() {
  return (
    <Wrapper>
      <Container>
        <ModeSwitch />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 14px;
  box-sizing: border-box;
`;

export default Header;
