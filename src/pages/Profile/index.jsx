import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Avatar } from "../../components/Avatar";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Container, Return } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Return to="/">
          <FiArrowLeft />
          <label>Return</label>
        </Return>
      </header>
      <main>
        <Avatar className="Avatar" size={186}>
          <label htmlFor="Avatar">
            <FiCamera />
            <input type="file" id="Avatar" />
          </label>
        </Avatar>

        <Input className="username" placeholder="Guilherme Tassinari" type="text" icon={FiUser} />
        <Input className="email" placeholder="guilhermehen.tassinari@gmail.com" type="text" icon={FiMail} />


        <Input className="password" placeholder="Current password" type="password" icon={FiLock} />
        <Input className="password" placeholder="New password" type="password" icon={FiLock} />

        <Button title="Save changes"/>
      </main>
    </Container>
  );
}
