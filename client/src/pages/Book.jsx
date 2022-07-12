import React from "react";
import styled from "styled-components";
import GetBookInfo from "../components/book/GetBookInfo";
import PostBookInfo from "../components/book/PostBookInfo";
import BookInfo from "../components/book/BookInfo";
import ToTop from "../components/ToTop";

export default function Book() {
  return (
    <FullContainer>
      <GetBookInfo />
      <PostBookInfo />
      <BookInfo />
      <Button>예약 완료</Button>
      <ToTop />
    </FullContainer>
  );
}

const FullContainer = styled.div`
  max-width: 100%;
  margin: 5% 15%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  width: 40%;
  padding: 5px;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
  background: #8daef2;
  color: #fff;
  position: absolute;
  bottom: -60px;
  right: 0;

  &:hover {
    box-shadow: 2px 2px 5px -1px #a6a9b6;
  }
`;
