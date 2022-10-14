import styled from "styled-components";

    interface RegularTextProps {
        color?: 'gray-100' | 'white-100'
        size?: 's' | 'm' | 'x' | 'xl';
        weight?: 'light' |'regular' | 'medium' | 'bold' | 'black'
    }
    interface TitleTextProps {
        color?: 'white-100' | 'blue-light';
        size?: 's' | 'm' | 'x' | 'xl';
        weight?: 'light' |'regular' | 'medium' | 'bold' | 'black'
    }

export const RegularText = styled.p<RegularTextProps>`
    font-size: 1rem;
    color: ${({ theme, color }) => theme.colors[`${color ?? 'gray-100'}`]}
    `;
    export const TitleText = styled.p<TitleTextProps>`
    font-size: ${({ theme, size }) => theme.fontSizes[`${size ?? 'x'}`]};
    color: ${({ theme, color }) => theme.colors[`${color ?? 'white-100'}`]};
    font-weight: ${({ theme, weight }) => theme.fontWeight[`${weight ?? 'regular'}`]}
`;