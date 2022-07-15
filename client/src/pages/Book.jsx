import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import GetBookerInfo from "../components/book/GetBookerInfo";
import HostInfo from "../components/book/HostInfo";
import BookInfo from "../components/book/BookInfo";
import ToTop from "../components/ToTop";

export default function Book() {
  const location = useLocation();

  const people = location.state.people;
  const date = location.state.date;
  const startTime = location.state.startTime;
  const endTime = location.state.endTime;

  console.log("예약내용" + date, startTime, endTime);
  return (
    <FullContainer>
      <GetBookerInfo />
      <HostInfo />
      <BookInfo people={people} startTime={startTime} endTime={endTime} />
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
  width: 30%;
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
