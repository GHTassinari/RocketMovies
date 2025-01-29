import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import { Rating } from "../../components/Rating";

import { Container, Return, Content } from "./styles";

export function Details() {
  const location = useLocation();
  const { state: note } = location;
  return (
    <Container>
      <Header />

      <Content>
        <section>
          <Return to="/">
            <FiArrowLeft />
            Voltar
          </Return>
          <div className="titleWrapper">
            <h1>{note.title}</h1>
            <Rating rating={note.rating} size={20}/>
          </div>
        </section>
      </Content>
    </Container>
  );
}
