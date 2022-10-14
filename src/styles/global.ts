import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "../@types/default";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType}>`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: ${({ theme }) => theme.fontFamily.roboto};
    }
    body {
        background: ${({ theme }) => theme.colors["base-background"]};
        color: ${({ theme }) => theme.colors["white-200"]};
        
        display: flex;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
        font-family: ${({ theme }) => theme.fontFamily.roboto};
    }

    ::-webkit-scrollbar {
        width: 0.4rem;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors["blue-dark"]}
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 2rem;
        background: ${({ theme }) => theme.colors["blue-light-card"]}
    }
`;



export const AppContainer = styled.div`
    
`;