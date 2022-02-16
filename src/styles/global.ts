import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
		--color-blue: #1E90FF;
		--color-blue-dark: #365B80;
		--color-yellow: #FFAB1F;
		--color-red: #FF4538;
		--color-green: #31BF0D;
		--color-white: #FFFFFF;
		--color-gray: #E7E9EE;
		--color-gray-100: #D7D7D7;
	}

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


  .react-modal-overlay{
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: rgba(0,0,0,0.5);
  }

	[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-content{
    position: relative;

    width: 100%;
    max-width: 576px;
    padding: 3rem;
    border-radius: 0.25rem;

    background: #F0F2F5;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
