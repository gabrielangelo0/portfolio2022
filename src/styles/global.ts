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
    }

    button {
        cursor: pointer;
        font-family: ${({ theme }) => theme.fontFamily.roboto};
    }
`;



export const AppContainer = styled.div`
    
`;