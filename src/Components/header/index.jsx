import React from 'react'
import { Button } from '../button';
import logo from '../../assets/logo-dio.png';
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";
const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO" />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='$'>Home</MenuRight>
                <Button tittle="Entrar"/>
                <Button tittle="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};