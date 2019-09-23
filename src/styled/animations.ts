import { keyframes } from 'styled-components';

export const slideUp = keyframes`
0% {
    transform: translateY(100px);
}
15% {
    transform: translateY(0px);
}
60% {
    transform: translateY(0px);
}
85% {
    transform: translateY(100px);
}
100% {
    transform: translateY(100px);
}
`;

export const spinner = keyframes`
    0% {
        transform: scale(0.3) rotate(0deg);
    } 
    35% {
        transform: scale(1.2);
    }
    55% {
        transform: scale(1.0) 
    }
    85% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(0.3) rotate(360deg);;
    }

`;
