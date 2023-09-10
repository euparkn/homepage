import { styled } from "styled-components";

const NAME = process.env.REACT_APP_NAME;

function Footer() {
  return (
    <Container>
      <small>© 2023 {NAME}</small>
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
    font-size: 0.85rem;
    color: #777;
  }
`;
