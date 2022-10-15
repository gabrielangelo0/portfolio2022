import styled from "styled-components";
import { DefaultLayout } from "../../styles/defaultLayout";

export const ProjectsContainer = styled(DefaultLayout)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center; 
    margin: 6rem 0;
`;
export const ProjectBox = styled.div`
    margin: 6rem 0;
    max-width: 80rem;
    position: relative;
    display: flex;
    overflow: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        margin-top: 0rem;
        max-width: 100vw;
    }
    `;

export const Carousel = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;

    gap: 1.25rem;
    scroll-behavior: smooth;

    span:first-child {
        margin-left: 2rem;
    }

    span {
        border-radius: 15px;
        width: 20rem;
        height: 15rem;
        background: #141414;
        border: 2px solid #4DB3F3;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        margin-top: 6rem;

        span {
            width: 15rem;
        }

    }
`;

export const ArrowButton = styled.button`
    background: transparent;
    border: none;
    z-index: 100;
`;
export const ArrowLeft = styled.img`
    display: flex;
    padding: 1rem;
    
    z-index: 100;
    `;
export const ArrowRight = styled.img`
    transform: rotate(180deg);
    padding: 1rem;
    display: flex;
    z-index: 100;
    width: 100%;
`;

export const ButtonArrowContainer = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    width: 100%;
    max-width: 80rem;
    
    transform: translateY(290%);
    
    @media (max-width: 768px) {
        max-width: 20rem;
        transform: translateY(400%);
    }
`;