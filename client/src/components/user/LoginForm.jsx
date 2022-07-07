import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { validateEmail } from "../../assets/utils/usefulFunction";
import styled from "styled-components";
import {
  Container,
  ContentsDiv,
  FormDiv,
  FormTitle,
  UserBtn,
} from "./UserForm";


function LoginForm() {

  const navigate = useNavigate();
  const params = useParams();


  return (
    <Container>
      <FormDiv>
        <FormTitle>로그인</FormTitle>

        <div>
        <UserBtn value="USER" onClick={()=> navigate('/login/user')} clicked={params.userType === 'user'}>
            USER
        </UserBtn>
        <UserBtn value="HOST" onClick={()=> navigate('/login/host')} clicked={params.userType === 'host'}>HOST</UserBtn>
        </div>
        <ContentsDiv>
          <LoginDiv className="login-form">
            <LoginInputDiv>
              <input
                type="email"
                className="email"
                placeholder="이메일"
              ></input>
              <input
                type="password"
                className="password"
                placeholder="패스워드"
              ></input>
            </LoginInputDiv>
            <LoginButton>LOGIN</LoginButton>
          </LoginDiv>


          <SocialLoginDiv>
            <SocialLoginBtn className="kakao-login">
              <img src="/images/kakaoLogo.png" alt="KAKAO" />
              <p>카카오 로그인</p>
            </SocialLoginBtn>
            <SocialLoginBtn className="kakao-login">
              <img src="/images/googleLogo.png" alt="GOOGLE"></img>
              <p>구글 로그인</p>
            </SocialLoginBtn>
          </SocialLoginDiv>

          <LoginFooterDiv>
            <tr>
              <QuestionTD>회원이 아니신가요?</QuestionTD>
              <LinkTD><a onClick={() => { navigate('/register/user')}}>회원가입</a></LinkTD>
            </tr>
            <tr>
              <QuestionTD>비밀번호를 잊으셨나요?</QuestionTD>
              <LinkTD>비밀번호 찾기</LinkTD>
            </tr>
          </LoginFooterDiv>
        </ContentsDiv>
      </FormDiv>
    </Container>
  );
}

const LoginDiv = styled.form`
  display: flex;
  flex-direction: row;
  margin: 2rem 1rem 0;

  input {
    width: 11rem;
    padding: 0.6rem;
    margin:  0.6rem 0.4rem;
    border: solid #d9d9d9;
    border-radius: 10px;
  }
`;

const LoginInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const LoginButton = styled.button`
  height: 7rem;
  width: 6rem;
  margin: 0.2rem 0.2rem;
  border-radius: 10px;
  background-color: #bbd3f2;
  color: white;
  font-weight: bold;
  border: none;

  :hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const SocialLoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SocialLoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 8rem;
  background-color: white;
  border: solid #d9d9d9;
  border-radius: 10px;
  font-weight: bold;
  margin: 1.5rem 0.5rem;

  :hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 5rem;
    margin: 0.3rem 0.2rem 0 0;
  }
`;
const LoginFooterDiv = styled.table`
  border: none;
  margin: 1.5rem;

  border-spacing: 0 10px;
`;

const QuestionTD = styled.td`
  text-align: left;
  color: #d9d9d9;
`;
const LinkTD = styled.td`
  text-align: right;
  text-decoration: underline;
`;

export default LoginForm;
