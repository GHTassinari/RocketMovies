import { FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>

        <h2>Log in to your account</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Login" />

        <Link to="/SignUp">
            Create an account
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
