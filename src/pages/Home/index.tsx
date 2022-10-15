import { HomeContainer, RectangleImg, PersonBox, TitleTextContainer, ButtonHome, LinkRefer } from "./styles";
import { RegularText, TitleText } from "../../components/Typograph";
import { Button } from "../../components/Button";

import Curriculum from "../../../src/assets/download/curriculum-Gabriel.pdf";
import MeImage from "../../assets/Intro.png";

export function Home () {
    return (
        <HomeContainer>
            <TitleTextContainer>
                <RegularText>Olá, me chamo</RegularText>
                <TitleText size="xl">Gabriel Angelo</TitleText>
                <RegularText>Frontend Developer</RegularText>
            </TitleTextContainer>
            <ButtonHome>
                <LinkRefer href={ Curriculum } target='_blank'><Button text="Download CV" variants="primary"  /></LinkRefer>
                <Button text="Vamos conversar" variants="secondary" />
            </ButtonHome>
            <PersonBox>
                <RectangleImg src={ MeImage } />
            </PersonBox>
        </HomeContainer>
    )
}