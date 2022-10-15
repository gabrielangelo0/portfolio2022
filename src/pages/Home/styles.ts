import styled from "styled-components";
import { DefaultLayout } from "../../styles/defaultLayout";

export const HomeContainer = styled(DefaultLayout)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 1rem;
    }

`;
export const TitleTextContainer = styled.div`
`;
export const LinkRefer = styled.a`
`;
export const ButtonHome = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3.75rem 0;
    gap: 1rem;
`;

export const PersonBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const RectangleImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const MainContainer = styled.div`

`;