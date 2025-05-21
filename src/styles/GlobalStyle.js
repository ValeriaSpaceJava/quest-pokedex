import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizzing: border-box;
    }

    body{
        background-color: ${({theme})=> theme.background};
        color: ${({theme})=> theme.text};
        font-family: sans-serif;
    
    }

`;