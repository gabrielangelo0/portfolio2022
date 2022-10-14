import styled from "styled-components";
import { DefaultLayout } from "../../styles/defaultLayout";

export const AboutMeContainer = styled(DefaultLayout)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    margin-bottom: 10rem;
`;
export const AboutMeCardContainer = styled.div`
    display: flex;
    position: relative;

    justify-content: space-between;
    max-width: 60rem;

    flex-direction: row;
    margin-top: 6rem;
    gap: 6rem;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0rem;
    }
`;

export const PersonSection = styled.section`
    display: flex;
    position: relative;
    margin-bottom: 5rem;

    
`;
export const PersonBox = styled.span`
    position: absolute;
    width: 20rem;
    height: 20rem;
    background: ${({ theme }) => theme.colors["blue-light-card"]};
    display: flex;
    z-index: -1;
    border-radius: 1.25rem;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
    `;

export const ImageAboutMe = styled.img`
    height: 20rem;
    width: 20rem;
    border-radius: 1.25rem;
    transform: rotate(10deg);
    transition: all 500ms;

    
    &:hover {
        transform: rotate(0deg);
    
    }

    @media (max-width: 768px) {
        width: 80vw; 
    }
`;
export const ExperiencesCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.25rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;