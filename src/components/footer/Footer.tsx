import { styled } from "styled-components";

function Footer() {
  return (
    <Container>
      <small>© 2023 Eunji Park</small>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  small {
    font-weight: 700;
    color: ${(props) => props.theme.fontSub};
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;
