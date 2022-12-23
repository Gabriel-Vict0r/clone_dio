import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import BgComp from '../../assets/bg-comp-feed.png';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={BgComp}/>
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/46754034?v=4" />
            <div>
              <h4>Gabriel Victor</h4>
              <p>Há 8 minutos</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>
              Projeto feito o curso de html e css no bootcamp dio do Global
              avanade... <strong>Saiba Mais</strong>
            </p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML e #Javascript</h4>
            <p>
              <FiThumbsUp /> 10
            </p>
          </HasInfo>
        </Content>
    </CardContainer>
  );
};
export { Card };
