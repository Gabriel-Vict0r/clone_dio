import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/button";
import { Header } from "../../Components/header";
import { Container, Tittle, TittleHighLight, TextContent } from "./styles";
import bannerImage from "../../assets/banner.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignin = () => { 
    navigate('/login');
  }
  return (
    <>
      <Header autenticado={false}/>
      <Container>
      <div>
        <Tittle>
          <TittleHighLight>Implemente <br/>
          </TittleHighLight>
          o seu futuro global agora!
        </Tittle>
        <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button tittle="começar agora" variant="secondary" onClick={handleClickSignin}/>
      </div>
      <div>
        <img src={bannerImage} alt="Imagem principal" />
      </div>
      </Container>
    </>
  );
};

export { Home };
