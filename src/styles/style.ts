import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        box-sizing: border-box;
    }
    body {
        font-family:'Roboto';
    }
    h1, h2, h3, h4, p {
        margin: 0;
        word-wrap: break-word;
    }
    button {
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    svg {
        flex-shrink: 0;
    }
`;
