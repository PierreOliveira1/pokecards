import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: #1f1e1e;
	position: relative;
	overflow: auto;
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

export const ContainerCards = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 10px;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	@media (max-width: 660px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(5, 1fr);
	}

	@media (max-width: 460px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(10, 1fr);
	}
`;

export const BoxButton = styled.div`
	width: 200px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	z-index: 1;
`;
