import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>

        <h2>Create your account</h2>

        <Input placeholder="Name" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Sign up" />

        <Link to="/SignIn">
          Already have an account?
        </Link>
      </Form>
    </Container>
  );
}
