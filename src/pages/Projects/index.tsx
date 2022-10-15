import { TitleText } from "../../components/Typograph";
import { ProjectsContainer, ProjectBox, Carousel, ArrowLeft, ArrowRight, ArrowButton, ButtonArrowContainer } from "./style";
import { CarouselItems } from "../../data/carousel";

import Arrow from '../../assets/icons/arrow.svg'
import React from "react";

export function Projects () {
    const carousel = React.useRef<HTMLDivElement & HTMLInputElement & any>(null);

    return (
        <ProjectsContainer>
            <TitleText color="blue-light" weight="black">PROJETOS</TitleText>
            <ProjectBox ref={ carousel }>
                <Carousel >
                    {CarouselItems.map((item) => {
                        const { id, title } = item;
                        return (
                            <span key={ id }><img src={`projects/${ title }`} /></span>
                            )
                        })}
                </Carousel>
            </ProjectBox>
                        <ButtonArrowContainer>
                            <ArrowButton 
                                onClick={ () => { carousel.current.scrollLeft -= carousel.current.offsetWidth} }
                            > 
                                    <ArrowLeft src={ Arrow } />
                            </ArrowButton>
                            <ArrowButton 
                                onClick={ () => { carousel.current.scrollLeft += carousel.current.offsetWidth} }
                            >
                                    <ArrowRight src={ Arrow } />
                            </ArrowButton>
                        </ButtonArrowContainer>
        </ProjectsContainer>
    )
}