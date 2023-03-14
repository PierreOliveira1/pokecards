import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		width: 100%;
		height: 100vh;
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	#root {
		width: 100%;
		height: 100vh;
	}
`;
