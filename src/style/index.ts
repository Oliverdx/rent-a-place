import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: var(--light-gray);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  button, input{
    -webkit-appearance: none;
    border: none;
    background: none;
    outline: none;
  }

  input:focus{
    outline: none;
  }

  a{
    text-decoration: none;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Light.ttf');
  }


  :root {
    --dark-gray: #282c34;
    --light-gray: #f1f1f1;
    --dark-blue: #2644a1;
    --edit-red: #d91f12;
  }
`;


export const Title = styled.h1`
  font-size: 35px;
  margin: 50px 0;
  text-align: center;
  color: var(--dark-gray);
`;

export const Subtitle = styled.h2`
  font-size: 23px;
  text-align: left;
  margin-bottom: 10px;
`;
