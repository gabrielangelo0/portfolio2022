import styled from "styled-components";
import { DefaultLayout } from "../../styles/defaultLayout";

export const AboutMeContainer = styled(DefaultLayout)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
`;
export const AboutMeCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    justify-content: space-between;
    max-width: 60rem;

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

    transition: all 500ms;

     &:hover {
            span {
                transform: rotate(0deg);
            }
        }
`;

export const ImageAboutMe = styled.img`
    height: 20rem;
    width: 20rem;
    border-radius: 1.25rem;
    transform: rotate(0deg);
    transition: all 500ms;
    z-index: 1;
    
    @media (max-width: 768px) {
        width: 80vw; 
    }
`;

export const PersonBox = styled.span`
    position: absolute;
    width: 20rem;
    height: 20rem;
    background: ${({ theme }) => theme.colors["blue-light-card"]};
    display: flex;
    z-index: 0;
    opacity: 1;
    transform: rotate(15deg);
    border-radius: 1.25rem;
    transition: all 500ms;
    
    

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

export const ExperiencesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;

    @media (max-width: 768px) {
        align-items: center;
        padding: 1rem;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;