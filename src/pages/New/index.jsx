import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";

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
        <main>
          <div className="firstRow">
            <Input className="title" placeholder="Inform the title" />
            <Input className="rating" placeholder="Inform the rating (From 0 to 5)" />
          </div>

          <textarea placeholder="Inform the description">

          </textarea>

          <h2 className="markersTitle">Markers</h2>
          <div className="tags">
            <NoteItem value="Science Fiction" />
            <NoteItem isnew="true"/>
          </div>
        </main>

        <footer>
          <Button title="Delete movie" />
          <Button title="Save changes" />
        </footer>
      </Content>
    </Container>
  );
}
