import { Container, Profile, Search, Avatar } from './styles';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search
                placeholder="Search for the title" 
            />
            <Profile>
                <div className="profileInfo">
                    <strong className="profileUsername">Guilherme Tassinari</strong>
                    <span>logout</span>
                </div>
                <Avatar to="/Profile" alt="Users Photo"></Avatar>
            </Profile>
        </Container>
    )
}