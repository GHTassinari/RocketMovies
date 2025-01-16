import { Container, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input />
            <Profile>
                <p>teste</p>
            </Profile>
        </Container>
    )
}