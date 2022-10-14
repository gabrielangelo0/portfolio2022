import { TitleText } from "../../components/Typograph";
import { ProjectContainer, CarouselBox } from "./style";
// import Carousel from 'react-elastic-carousel';
// import { CarouselItems } from "../../data/carousel";

export function Projects () {

    return (
        <ProjectContainer>
            <TitleText weight="black" color='blue-light'>PROJETOS</TitleText>
            {/* <Carousel 
                itemsToShow={3}
                autoPlaySpeed={4000}
                isRTL={false}
                initialActiveIndex={0}
                disableArrowsOnEnd={false}
                enableAutoPlay={true}
                enableMouseSwipe={false}
                enableSwipe={true}
                enableTilt={true}
                className="carouse"
            >
                {CarouselItems.map(item => (
                    <CarouselBox key={item.id}><img src={`/projects/${item.title}`} /></CarouselBox>
                ))}
            </Carousel> */}
        </ProjectContainer>
    )
}
