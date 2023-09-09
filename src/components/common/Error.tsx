import { styled } from "styled-components";

function Error({ code, text }: { code?: number; text?: string }) {
  return (
    <Container>
      {!code || (!text && <h3>Error</h3>)}
      <h3>{code}</h3>
      <p>{text}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
  }
  p {
    margin-top: 8px;
    color: #777;
  }
`;

export default Error;
