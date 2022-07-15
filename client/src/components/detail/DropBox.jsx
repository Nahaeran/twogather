import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";
import { FcHome, FcConferenceCall } from "react-icons/fc";

export default function Dropbox({ rooms, currPeople }) {
  return (
    <RoomList>
      <p>세부 공간 선택</p>

      {rooms.map((item, i) => {
        return (
          <Container key={i}>
            <RoomItem>
              <input
                type="radio"
                id="select"
                name="room"
                value={item.id}
                onClick={(e) => {
                  currPeople.current = item.people;
                  console.log(currPeople.current);
                }}
              />
              <RoomLabel>
                <span>{item.title}</span>
                <span>시간당 {item.pay} ₩</span>
              </RoomLabel>
              <img src={item.image} />
              <HiChevronDown />
            </RoomItem>
            <Dropdown>
              <div>
                <FcHome style={{ marginRight: "5px" }} size={16} />
                공간 유형 : {item.roomType}
              </div>
              <div>
                <FcConferenceCall style={{ marginRight: "5px" }} size={16} />
                수용 인원 : {item.people}
              </div>
            </Dropdown>
          </Container>
        );
      })}
    </RoomList>
  );
}

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: solid #8daef2;
  border-width: 2px 0;
  background-color: #fff;
  font-size: 0.8rem;
`;

const Container = styled.details`
  &[open] summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }

  @keyframes sweep {
    0% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const RoomItem = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  border-top: 2px solid #8daef2;
  padding: 5px 0;
  transition: all 0.3s;

  & img {
    width: 50%;
    border-radius: 15px;
    padding: 5px 0;
  }
`;

const RoomLabel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Dropdown = styled.div`
  padding-bottom: 10px;
  transition: all 0.3s;
  & div {
    margin: 0 10%;
    display: flex;
    align-items: flex-end;
  }
`;
