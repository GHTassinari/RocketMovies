import { Header } from "../../components/Header";

import { FiPlus } from "react-icons/fi";

import { Container, Content, Add, ButtonWrapper } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <section>
          <h1>My movies</h1>
          <ButtonWrapper to="/new">
            <Add icon={FiPlus} title="Add movie" />
          </ButtonWrapper>
        </section>
        <main>
        </main>
      </Content>
    </Container>
  );
}
