import { ButtonHTMLAttributes } from "react";
import { RegularText } from "../Typograph";
import { ButtonContainer } from "./style";

    interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
        text: string;
        variants: 'primary' | 'secondary';
        weights?: 'light' |'regular' | 'medium' | 'bold' | 'black';
    }

export function Button ({ text, variants, weights, ...props }: ButtonProps) {
    return (
        <ButtonContainer variant={ variants } weight={ weights } {...props}>
            <RegularText>{ text }</RegularText>
        </ButtonContainer>
    )
}