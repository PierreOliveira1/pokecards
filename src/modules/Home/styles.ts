import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #1f1e1e;
`;

export const Logo = styled.img`
	width: 300px;
	height: auto;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		width: 200px;
	}

	@media (max-width: 320px) {
		width: 150px;
	}
`;

export const ImagePokeBall = styled.img`
	width: 600px;
	height: auto;
	position: absolute;
	offset: 0;
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

export const Box = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;
