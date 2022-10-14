import { ReactNode } from "react";
import { RegularText } from "../Typograph";
import { ButtonContainer } from "./style";

    interface ButtonProps {
        text: string;
        variants: 'primary' | 'secondary';
        weights: 'light' |'regular' | 'medium' | 'bold' | 'black';
    }

export function Button ({ text, variants, weights }: ButtonProps) {
    return (
        <ButtonContainer variant={ variants } weight={ weights }>
            <RegularText>{ text }</RegularText>
        </ButtonContainer>
    )
}