import { ReactNode } from "react";
import { RegularText } from "../Typograph";
import { CardContainer, IconContainer } from "./styles";

    interface CardProps {
        icon?: ReactNode;
        title: string;
        description: string;
    }

export function Card ({ icon, title, description }: CardProps) {
    return (
        <CardContainer>
            <>
                <IconContainer><div>{ icon }</div></IconContainer>
                <RegularText>{ title }</RegularText>
                <p>{ description }</p>
            </>
        </CardContainer>
    )
}