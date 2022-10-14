import styled, { css } from "styled-components";

    interface CardContainerProps {
        variant: 'full' | 'half';
    }

export const CardContainer = styled.div<CardContainerProps>`
    background: ${({ theme }) => theme.colors["blue-dark-card"]};
    padding: 1.5rem;
    border-radius: 1rem;
    gap: 1.5rem;
    min-width: 200px;
    
    display: flex;
    position: relative;
    flex-direction: column;
    transition: all 5000ms;

    ${({ variant }) => variant === 'full' && css`
    padding: 1.5rem 4.7rem;
    p {
        display: none;
    }
    
    .up {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ theme }) => theme.colors["gradient-blue-180deg"]};
            border-radius: 1rem;
            z-index: -1;

            h4 {
                font-weight: 400;
            }
        }

        &:hover {
            .up {
                background: ${({ theme }) => theme.colors["gradient-blue-180deg"]};
                z-index: 2;

            }

        }

        `}
        ${({ variant }) => variant === 'half' && css`
        padding: 1.5rem;
        justify-content: space-between;

        h3 {
            display: none;
        }






        

        @media (max-width: 768px) {
        width: 90vw;
    }   
`}
        
        
        
`;
export const IconContainer = styled.div`

`;