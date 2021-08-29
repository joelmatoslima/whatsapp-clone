import { useState } from "react";
import styled from "styled-components";
import AsideLeft from "./components/AsideLeft";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import photoPerfil from "./images/user.jpeg";

export default function App() {
  const [activeChat, setActiveChat] = useState("");
  const [chatList, setChatList] = useState([
    { name: "Joel", chatId: 1, PerfilImage: photoPerfil },
    { name: "Milena", chatId: 2, PerfilImage: photoPerfil },
    { name: "Neminas", chatId: 5, PerfilImage: photoPerfil },
    { name: "Gustavo", chatId: 66 , PerfilImage: photoPerfil},
  ]);

  const [user, setUser] = useState({
    name: "JoelChan",
    id: 1,
    avatar: photoPerfil
  })

  console.log(activeChat);
  return (
    <Container>
      <AsideLeft
        chatList={chatList}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
      />

      {activeChat && <ChatWindow activeChat={activeChat} user={user} />}
      {activeChat === "" && <ChatIntro />}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #ededed;
  display: flex;
`;
