import { Container, Profile, Search, Title } from "./styles";
import { Link } from "react-router-dom";

import { Avatar } from "../../components/Avatar";

export function Header() {
  return (
    <Container>
      <Title to="/">RocketMovies</Title>
      <Search placeholder="Search for the title" />
      <Profile>
        <div className="profileInfo">
          <strong className="profileUsername">Guilherme Tassinari</strong>
          <span>logout</span>
        </div>
        <Link to="/Profile">
          <Avatar size={64} />
        </Link>
      </Profile>
    </Container>
  );
}
