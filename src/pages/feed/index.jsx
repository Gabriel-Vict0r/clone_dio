import { Header } from "../../Components/header";
import { Container, Tittle, TittleHighLight, Column } from "./styles";
import { Card } from "../../Components/card";
import { UserInfo } from "../../Components/userInfo";
const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Tittle>Feed</Tittle>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TittleHighLight># RANKING 5 TOP DA SEMANA</TittleHighLight>
          <UserInfo
            percentual={80}
            name="Gabriel Victor"
            image="https://avatars.githubusercontent.com/u/46754034?v=4"
          />
          <UserInfo
            percentual={70}
            name="Gabriel Victor"
            image="https://avatars.githubusercontent.com/u/46754034?v=4"
          />
          <UserInfo
            percentual={60}
            name="Gabriel Victor"
            image="https://avatars.githubusercontent.com/u/46754034?v=4"
          />
          <UserInfo
            percentual={50}
            name="Gabriel Victor"
            image="https://avatars.githubusercontent.com/u/46754034?v=4"
          />
          <UserInfo
            percentual={40}
            name="Gabriel Victor"
            image="https://avatars.githubusercontent.com/u/46754034?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
