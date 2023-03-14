import styled from 'styled-components';

export const Header = styled.header`
	background-color: #1f1e1e;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 15%;
	width: 100%;

	& nav {
		display: flex;
		max-width: 1000px;
		width: 100%;
	}

	& nav > ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	& nav > ul > li {
		list-style: none;
	}

	& nav > ul > li > h1 {
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 1.8rem;
		color: #ffffff;
	}

	@media (max-width: 1100px) {
		padding: 0 20px;
	}

	@media (max-width: 460px) {
		& nav > ul > li > h1 {
			font-size: 1.2rem;
		}
	}
`;
