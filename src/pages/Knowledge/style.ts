import styled from "styled-components";
import { DefaultLayout } from "../../styles/defaultLayout";

export const KnowledgeContainer = styled(DefaultLayout)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center; 
    
    @media (max-width: 768px) {
        margin-top: 6rem;

    }
`;
export const KnowledgeBox = styled.div`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        /* margin-top: 6rem; */
    }
`;