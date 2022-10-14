import { Card } from "../../components/Card";
import { TitleText } from "../../components/Typograph";
import { knowledges } from "../../data/knowledges";
import { KnowledgeContainer, KnowledgeBox } from "./style";

export function Knowledge () {
    return (
        <KnowledgeContainer>
            <TitleText color="blue-light" weight="black">CONHECIMENTOS</TitleText>
            <KnowledgeBox>

                {knowledges.map(item => (
                    <Card 
                        variants="full"
                        key={item.id} 
                        title={ item.name }
                        iconBg={`/knowledges/${item.photo}`}
                        alt={ item.name }
                        experience={ item.experience }
                    />
                ))}
                
            </KnowledgeBox>
        </KnowledgeContainer>
    )
}