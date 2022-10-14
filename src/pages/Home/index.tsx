import { HomeContainer, RectangleImg, PersonBox, TitleTextContainer, ButtonHome } from "./styles";
import MeImage from "../../assets/Intro.png";
import { RegularText, TitleText } from "../../components/Typograph";
import { Button } from "../../components/Button";

export function Home () {
    return (
        <HomeContainer>
            <TitleTextContainer>
                <RegularText>Olá, me chamo</RegularText>
                <TitleText size="xl">Gabriel Angelo</TitleText>
                <RegularText>Frontend Developer</RegularText>
            </TitleTextContainer>
            <ButtonHome>
                <Button text="Download CV" variants="primary" />
                <Button text="Vamos conversar" variants="secondary" />
            </ButtonHome>
            <PersonBox>
                <RectangleImg src={ MeImage } />
            </PersonBox>
        </HomeContainer>
    )
}