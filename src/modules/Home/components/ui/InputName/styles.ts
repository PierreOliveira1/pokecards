import styled from 'styled-components';

export const Input = styled.input`
	width: 35rem;
	height: 40px;
	border: 2px solid #ed5564;
	border-radius: 5px;
	padding: 0px 10px;
	background-color: transparent;
	font-size: medium;
	margin-bottom: 20px;
	color: #ed5564;
	font-weight: 500;

	&::placeholder {
		color: #ed5564;
	}

	@media (max-width: 768px) {
		width: 30rem;
	}

	@media (max-width: 500px) {
		width: 25rem;
	}

	@media (max-width: 425px) {
		width: 90%;
	}
`;
