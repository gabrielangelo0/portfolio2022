import { TitleText } from "../../components/Typograph";
import { AboutMeCardContainer, AboutMeContainer, ImageAboutMe, ExperiencesCard, PersonSection, PersonBox } from "./style";
import { Card } from "../../components/Card";
import { Medal } from "phosphor-react";

import CardPerson from '../../assets/card-about.png'

export function AboutMe () {
    return (
        <AboutMeContainer>
            <TitleText color="blue-light" weight="black">SOBRE MIM</TitleText>
            <AboutMeCardContainer>
                <PersonSection>
                        <ImageAboutMe src={ CardPerson } />
                        <PersonBox />
                </PersonSection>
                <ExperiencesCard>
                    <Card 
                        icon={ <Medal size={20} weight='fill' color='#4DB3F3' /> }
                        title='Experiências'
                        description='1 ano de experiência'
                    />
                    <Card 
                        icon={ <Medal size={20} weight='fill' color='#4DB3F3' /> }
                        title='Projetos'
                        description='10 projetos'
                    />
                </ExperiencesCard>
            </AboutMeCardContainer>
        </AboutMeContainer>
    )
}