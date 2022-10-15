import styled from "styled-components";

export const DefaultLayout = styled.section`
    display: flex;
    width: 99.1vw;    
    margin: 6rem 0;

    justify-content: center;
    align-items: start;
    
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        margin: 2rem 0;
    }
`;