import React, { useState } from "react";
import styled from "styled-components";
import user from "../images/user.jpeg";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./ChatListItem";

export default function AsideLeft({ chatList, setActiveChat, activeChat }) {
  // const [chatList, setChatList] = useState([
  //   { a: 1, name: "Joel" },
  //   { b: 2, name: "Milena" },
  // ]);

  // console.log(chatList[1].chatId);

  //// const [chatAtivo, setChatAtivo] = useState(activeChat)
  return (
    <Aside>
      <header>
        <img src={user} alt="user" />
        <Buttons>
          <DonutLargeRoundedIcon fontSize="small" />
          <ChatRoundedIcon fontSize="small" />
          <MoreVertRoundedIcon fontSize="small" />
        </Buttons>
      </header>
      <div style={{ background: "#ededed", paddingBottom: "10px" }}>
        <InputArea>
          <SearchIcon style={{ color: "#919191" }} />
          <input
            type="search"
            placeholder="Procurar ou começar uma nova conversa"
          />
        </InputArea>
      </div>

      {chatList.map((item, key) => (
        <ChatListItem
          active={item.chatId === activeChat.chatId }          
          item={item}
          key={key}
          setActiveChat={setActiveChat}
        />
      ))}
    </Aside>
  );
}

const Aside = styled.aside`
  width: 35%;
  max-width: 415px;
  border-right: 1px solid #ddd;
  background-color: #fff;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* position: relative; */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ededed;
    padding: 10px 15px;
    /* position: absolute; */
    /* width: 100%; */

    > img {
      width: 40px;
      height: 40px;

      border-radius: 50%;
    }
  }
`;

const Buttons = styled.div`
  > svg {
    color: #919191;
    cursor: pointer;
    margin: 0 10px;
  }
`;

const InputArea = styled.div`
  background-color: #fff;
  //background-color: #ededed; // voltar aqi
  /* width: 100%; */

  margin: 0 15px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 19px;
  input {
    flex: 1;
    border: 0;
    outline: none;
    /* padding: 10px; */
  }
`;
