import styled from 'styled-components';

export const Loading = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 99;
	background: rgba(0, 0, 0, 0.5);

	& > div {
		width: 100px;
		height: 100px;
		border: 10px solid #fff;
		border-radius: 50%;
		border-top-color: #f00;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;
