import styled from 'styled-components';

export const Button = styled.button`
	width: 15rem;
	height: 53px;
	background: #ed5564;
	border-radius: 15px;
	font-weight: 500;
	font-size: 1.3rem;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: #d43f4d;
	}

	&:disabled {
		background: #bfbfbf;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		width: 10rem;
	}

	@media (max-width: 480px) {
		width: 8rem;
		font-size: 1rem;
	}
`;
