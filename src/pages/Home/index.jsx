import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

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
        <Note
          data={{
            title: "Interestellar",
            tags: [
              { id: "1", name: "react" },
              { id: "2", name: "rocketseat" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            tags: [
              { id: "1", name: "react" },
              { id: "2", name: "rocketseat" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            tags: [
              { id: "1", name: "react" },
              { id: "2", name: "rocketseat" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            tags: [
              { id: "1", name: "react" },
              { id: "2", name: "rocketseat" },
            ],
          }}
        />

        </main>
      </Content>
    </Container>
  );
}
