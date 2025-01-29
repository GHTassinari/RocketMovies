import { Container, NoteDescription } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({ data, ...rest }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <Rating rating={data.rating} size={12} />
      <NoteDescription
        description={data.description}
      />

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
