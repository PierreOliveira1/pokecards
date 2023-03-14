import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #1f1e1e;

	& h1,
	h2 {
		z-index: 1;
		color: #fff;
		font-size: 3rem;
		font-weight: 700;
	}
`;

export const Logo = styled.img`
	width: 300px;
	height: auto;
	margin-bottom: 20px;
`;

export const ImagePokeBall = styled.img`
	width: 600px;
	height: auto;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	opacity: 0.1;

	@media (max-width: 768px) {
		width: 450px;
		height: auto;
	}

	@media (max-width: 480px) {
		width: 300px;
		height: auto;
	}

	@media (max-width: 320px) {
		width: 200px;
		height: auto;
	}
`;
