import React from "react";
import styled from "styled-components";

export default function MensageItem({ data, user }) {
  return (
    <BoxLine
      style={{
        justifyContent: data.author === user.id ? "flex-end" : "flex-start",
      }}
    >
      <BoxMensage>
        {/* <b>{user.name}</b> */}
        <p>{data.body}</p>
        <span>19:01</span>
      </BoxMensage>
    </BoxLine>
  );
}
const BoxLine = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  /* flex-direction: column; */
  /* background-color: red; */
  /* margin: 3px 0; */
`;

const BoxMensage = styled.div`
  max-width: 85%;
  background-color: #fff;
  margin: 5px 10px;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
    /* margin: 5px 40 5px 5px; */
    padding-right: 10px;
  }

  span {
    /* color: red; */
    align-self: flex-end;
    font-size: 11px;
    color: #999;
  }
`;
