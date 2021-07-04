import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

/**
 * Paleta de cores
 * azul: #1e90ff
 * amarelo: #FFAB1F
 * vermelho: #FF4538
 * verde: #31BF0D
 * fonte1: #365B80
 */
