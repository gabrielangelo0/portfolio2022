import { RegularText, TitleText } from "../../components/Typograph";
import { AboutMeCardContainer, AboutMeContainer, ImageAboutMe, ExperiencesCard, PersonSection, PersonBox, CardWrapper } from "./style";
import { Card } from "../../components/Card";
import { Medal, Briefcase } from "phosphor-react";

import CardPerson from '../../assets/card-about.png'
import { Button } from "../../components/Button";

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
                    <CardWrapper>
                        <Card
                            variants="half"
                            icon={<Medal size={20} weight='fill' color='#4DB3F3' />}
                            title='Experiências'
                            description='1 ano de experiência'
                        />
                        <Card 
                            variants="half"
                            icon={<Briefcase size={20} weight='fill' color='#4DB3F3' />}
                            title='Projetos'
                            description='10 projetos'
                        />
                    </CardWrapper>
                
                    <RegularText align="left">
                        Prazer em te conhecer, me chamo Gabriel Angelo, tenho 24 anos. Estou graduando analise e desenvolvimento de sistemas. Sou apaixonado por tecnologia desde 1998.
                    </RegularText>
                    <Button 
                        text="Vamos conversar"
                        variants="secondary"
                        weights='bold'
                    />
                </ExperiencesCard>
            </AboutMeCardContainer>
        </AboutMeContainer>
    )
}