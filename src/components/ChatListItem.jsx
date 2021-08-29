import { useState } from "react";
import styled from "styled-components";

import user from "../images/user.jpeg";

export default function ChatListItem({
  item,
  setActiveChat,
  active,
  
}) {
  //  console.log(key);
  //console.log(item);

  //const [ativo, setAtivo] = useState();

  console.log(active);

  return (
    <ChatList
      active={active}
      // ativo={ativo}
      onClick={() => {
        console.log(item);
        setActiveChat(item);
        //setAtivo(item.chatId === activeChat.chatId);
        // setAtivo(!ativo)
      }}
    >
      <ChatMsg>
        <img src={item.PerfilImage} alt="user" />
        <div>
          <ChatName>{item.name}</ChatName>
          <ChatLastMsg>
            Uma mensagem qualquer Uma mensagem qualquer Uma mensagem qualquer
          </ChatLastMsg>
        </div>
      </ChatMsg>

      <ChatDate>19:01</ChatDate>
    </ChatList>
  );
}

const ChatList = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #eee;
  padding: 10px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background: #ebebeb;
  `}

  :hover {
    background-color: #f5f5f5;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const ChatMsg = styled.div`
  display: flex;
`;
const ChatName = styled.span`
  display: block;
  color: #000;
  font-size: 17px;
`;

const ChatLastMsg = styled.span`
  display: block;
  font-size: 14px;
  color: #999;

  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0; */

  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChatDate = styled.span`
  font-size: 12px;
  color: #999;
`;
