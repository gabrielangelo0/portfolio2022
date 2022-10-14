import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${({ theme }) => theme.colors["blue-dark-card"]};
    padding: 1.5rem;
    border-radius: 1rem;
    gap: 1.5rem;
    min-width: 200px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 90vw;
    }
`;

    interface IconContainerProps {
        
    }
export const IconContainer = styled.div<IconContainerProps>`

`;