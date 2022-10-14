import styled, { css } from "styled-components";

    interface ButtonContainerProps {
        variant: 'primary' | 'secondary';
    }

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 8px 16px;
    border-radius: 6px;

    ${({ variant, theme }) => variant === 'primary' && css`
        border: 2px solid ${theme.colors[`blue-light`]};
        background: transparent;
        
        p {
            color: ${theme.colors["blue-light"]};
        }
    `}

    ${({ variant, theme }) => variant === 'secondary' && css`
        border: 0;
        background: ${theme.colors["blue-light"]};
        
        p {
            color: ${theme.colors["blue-dark"]};
        }
    `}
`;