import { Container } from "./styles";

export function Description({ description, ...rest }) {
  return (
    <Container {...rest}>
      { description }
    </Container>
  );
}
