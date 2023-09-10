import { styled } from "styled-components";

function Header() {
  return <Container>header</Container>;
}

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: aqua;
`;

export default Header;
