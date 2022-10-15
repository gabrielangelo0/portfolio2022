import React, { ReactNode } from "react";
import { RegularText } from "../Typograph";
import { CardContainer, IconContainer } from "./styles";

    interface CardProps {
        icon?: ReactNode;
        title?: string;
        description?: string;
        iconBg?: string;
        name?: string;
        alt?: string;
        variants: "full" | "half";
        experience?: string;
    }

export function Card ({ icon, title, description, iconBg, name, variants, experience }: CardProps) {
    return (
        <CardContainer variant={ variants } >
                
                    <section className="down">
                        {!icon ? null : <IconContainer><div>{ icon }</div></IconContainer>}
                        {!title ? null : <RegularText>{ title }</RegularText>}
                        {!description ? null : <p>{ description }</p>}
                        {!iconBg ? null : <img src={ iconBg } alt={ name } />}
                    </section>
                    {experience ?
                    <section className="up">
                        <h3>{ title }</h3>
                        <h4>{ experience }</h4>
                    </section> : null}

        </CardContainer>
    )
}