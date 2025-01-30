import { useLocation } from "react-router-dom";

import { processDate } from "../../utils/dateUtils";

import { FiArrowLeft } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Avatar } from "../../components/Avatar";

import { Container, Return, Content, DetailsTag } from "./styles";

export function Details() {
  const location = useLocation();
  const { state: note } = location;

  const { time, day, month, year } = processDate(note.date);

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
            <Rating rating={note.rating} size={20} />
          </div>
          <div className="noteInfoWrapper">
            <Avatar size={16} />
            <h6>Written by {note.author}</h6>
            <FiClock />
            <h6>
              {day}/{month}/{year} at {time.hour}:{time.minute}
            </h6>
          </div>

          {note.tags && (
            <div className="tagWrapper">
              {note.tags.map((tag) => (
                <DetailsTag key={tag.id} title={tag.name} />
              ))}
            </div>
          )}
        </section>

        <main>
          <p>{note.description}</p>
        </main>
      </Content>
    </Container>
  );
}
