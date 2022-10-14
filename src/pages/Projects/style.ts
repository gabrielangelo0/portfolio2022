import styled from "styled-components";
import { DefaultLayout } from "../../styles/defaultLayout";

export const ProjectContainer = styled(DefaultLayout)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center; 
    max-width: 70vw;

    .carouse {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 6rem;
        
        .rec-carousel-item {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border: 2px solid #4DB3F3;
            border-radius: 15px;
            height: 100%;
            background: #141414;
        }

        
    }

    @media (max-width: 768px) {
        max-width: 100vw;

    }
`;

export const CarouselBox = styled.div`
    display: flex;
    margin-top: 6rem;
    justify-content: center;
    align-items: center;
    margin-right: 10rem;

    img {
        width: 90%;
    }

    @media (max-width: 768px) {
        img {
        }
    }
`;