import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { authentication, provider } from "../components/Firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const LogIn = (e) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
        e.preventDefault();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src='https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s88-c-k-c0x00ffffff-no-rj' />
        <h1> Become a RentEasy Member</h1>
        <p>RentEasy.com</p>
        <Button onClick={(e) => LogIn(e)}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default SignUp;
const LoginInnerContainer = styled.div`
  > img {
    object-fit: contain;
    margin-bottom: 40px;
  }
  > h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
  > p {
    font-size: 17px;
    font-weight: 400;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48 !important;
    color: white;
  }
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f8f8f8;
`;
