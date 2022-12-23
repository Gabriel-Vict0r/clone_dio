import React from "react";
import { Button } from "../button";
import logo from "../../assets/logo-dio.png";
import {AiOutlineSearch} from 'react-icons/ai';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                {<AiOutlineSearch />}
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/46754034?v=4" />
          ) : (
            <>
            <MenuRight href="$">Home</MenuRight>
            <Button tittle="Entrar" variant="primary" />
            <Button tittle="Cadastrar" variant="primary" />
          </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
