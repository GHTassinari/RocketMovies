import { Header } from "../../components/Header";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Return } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <Return to="/">
            <FiArrowLeft />
            Return
          </Return>
          <h1>New Movie</h1>
        </section>
      </Content>
    </Container>
  );
}
