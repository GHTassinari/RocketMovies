import { Container } from "./styles";
import { FiStar } from "react-icons/fi";

export function Rating({ rating, size, ...rest }) {
  const maxStars = 5;

  return (
    <Container {...rest}>
      {[...Array(maxStars)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FiStar color="#FF859B" fill="#FF859B" size={size} />
          ) : (
            <FiStar color="#FF859B" fill="none" size={size} />
          )}
        </span>
      ))}
    </Container>
  );
}
