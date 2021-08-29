import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import MicIcon from "@material-ui/icons/Mic";
import whatsAppBg from "../images/whatsApp-bg.png";
import Picker from "emoji-picker-react";

import MensageItem from "./MensageItem";

export default function ChatWindow({ activeChat, user }) {
  console.log(activeChat);
  const [activeEmoji, setActiveEmoji] = useState(false);
  const [text, setText] = useState("");
  const [listMsg, setListMsg] = useState([
    {
      author: 1,
      body: "Uma mensagem diferente de nos",
    },
    {
      author: 2,
      body: "vc é louco",
    },
    {
      author: 1,
      body: "Talvez eu seja, talvez nao",
    },
    
    {
      author: 2,
      body: "O madara é o melhor",
    },
  ]);

  function onEmojiClick(e, emojiObject) {
    console.log(emojiObject.emoji);
    setText(text + emojiObject.emoji);
  }

  return (
    <ChatWindowArea>
      <header>
        <div>
          <img src={activeChat.PerfilImage} alt="PerfilImage" />
          <span>{activeChat.name}</span>
        </div>

        <div>
          <SearchIcon />
          <AttachFileIcon />
          <MoreVertIcon />
        </div>
      </header>

      <section>
        {listMsg.map((data, key) => {
          return <MensageItem data={data} user={user} />;
        })}
      </section>

      <EmojiArea activeEmoji={activeEmoji}>
        <Picker
          onEmojiClick={onEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </EmojiArea>

      <Footer>
        {!activeEmoji ? (
          <SentimentVerySatisfiedIcon
            onClick={() => setActiveEmoji(!activeEmoji)}
          />
        ) : (
          <CloseIcon onClick={() => setActiveEmoji(!activeEmoji)} />
        )}
        <input
          type="text"
          placeholder="Digite uma mensagem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text ? <SendIcon /> : <MicIcon />}
      </Footer>
    </ChatWindowArea>
  );
}

const ChatWindowArea = styled.div`
  /* background-color: red; */
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 100vh;

  header {
    /* background-color: #ce8c8c; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 100%; */
    height: 60px;

    div:first-child {
      /* background-color: red; */
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    div:last-child {
      margin-right: 20px;
      svg {
        color: #919191;
        margin: 0 5px;
        cursor: pointer;
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 15px;
      margin-right: 15px;
    }
    span {
      font-size: 17px;
      color: #000;
    }
  }

  section {
    overflow-y: auto;
    height: calc(100% - 122px);
    background-size: contain;
    background-position: center;
    background-image: url(${whatsAppBg});
  }
`;

const Footer = styled.div`
  /* background-color: red; */
  height: 62px;
  display: flex;
  align-items: center;

  svg {
    color: #919191;
    /* margin: 0 5px; */
    cursor: pointer;
    margin: 0 15px;
  }
  input {
    /* width: 100%; */
    flex: 1;
    height: 40px;
    border: 0;
    outline: 0;
    background-color: #fff;
    border-radius: 20px;
    font-size: 15px;
    color: #4a4a4a;
    padding: 0 15px;
  }
`;
const EmojiArea = styled.div`
  position: absolute;
  bottom: 62px;
  /* transition: all ease 1s; */

  aside {
    width: auto;
    /* background: none; */
    transition: all ease 0.2s;
    height: 0;

    ${({ activeEmoji }) => activeEmoji && `height: 300px;`}

    ul::before {
      background: none !important;
    }
  }
  /* background-color: red; */
`;
