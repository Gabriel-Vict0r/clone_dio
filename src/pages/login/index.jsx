import {MdEmail, MdLock} from 'react-icons/md';
import { Button } from "../../Components/button";
import { Header } from "../../Components/header";
import { useNavigate } from 'react-router-dom';
import {
  Column,
  Container,
  CreateText,
  ForgotText,
  Row,
  SubTittleLogin,
  Tittle,
  TittleLogin,
  Wrapper,
} from "./styles";
import { Input } from "../../Components/input";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignin = () => { 
    navigate('/feed');
  }

  return (
    <>
      <Header autenticado={false}/>
      <Container>
        <Column>
          <Tittle>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Tittle>
        </Column>
        <Column>
          <Wrapper>
            <TittleLogin>Faça seu cadastro</TittleLogin>
            <SubTittleLogin>Faça seu login e make the change._</SubTittleLogin>
            <form>
            <Input placeholder="email" type="email" leftIcon={<MdEmail />}/>
            <Input placeholder="senha" type="password" leftIcon={<MdLock />}/>
            <Button tittle="Entrar" variant="secondary" onClick={handleClickSignin} type="button"/>
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
