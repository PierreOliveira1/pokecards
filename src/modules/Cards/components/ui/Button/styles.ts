import styled from 'styled-components';

export const Button = styled.button<{
	variant?: boolean;
}>`
	width: 150px;
	height: fit-content;
	padding: 0.8rem 1rem;
	border: none;
	border-radius: 0.5rem;
	background: ${({ variant }) => (variant ? '#ED5564' : '#434A54')};
	font-weight: 500;
	font-size: 1.1rem;
	color: #fff;
	cursor: pointer;

	&:hover {
		background: ${({ variant }) => (variant ? '#D64553' : '#5C636E')};
	}

	&:disabled {
		background: #434a54;
		cursor: not-allowed;
	}
`;
