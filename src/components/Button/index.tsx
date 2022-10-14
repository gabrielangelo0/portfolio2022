import { ReactNode } from "react";
import { RegularText } from "../Typograph";
import { ButtonContainer } from "./style";

    interface ButtonProps {
        text: string;
        variants: 'primary' | 'secondary';
    }

export function Button ({ text, variants }: ButtonProps) {
    return (
        <ButtonContainer variant={ variants }>
            <RegularText>{ text }</RegularText>
        </ButtonContainer>
    )
}