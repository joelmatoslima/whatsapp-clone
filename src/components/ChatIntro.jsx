import React from "react";
import styled from "styled-components";
import intro from "../images/intro-connection.jpg";

export default function ChatIntro() {
  return (
    <ContentIntro>
      <img src={intro} alt="intro" />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para
        reduzir o uso de dados, conecte seu celular a uma rede Wi-fi
      </h2>
    </ContentIntro>
  );
}

const ContentIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-bottom: 6px solid #4adf83;
  flex: 1;
  /* max-width: 400px; */
  text-align: center;

  h1 {
    font-size: 32px;
    color: #525252;
    font-weight: normal;
    max-width: 400px;
    margin-top: 30px;
  }
  h2 {
    font-size: 14px;
    color: #777;
    font-weight: normal;
    margin-top: 20px;
    max-width: 500px;
  }
`;
