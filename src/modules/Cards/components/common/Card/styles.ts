import styled from 'styled-components';
import { keyframes } from 'styled-components';
import fontColorContrast from 'font-color-contrast';
import { motion } from 'framer-motion';

export const borderAnimation = keyframes`
	to {
    --angle: 360deg;
  }
`;

export const FrontCard = styled.div<{
	backgroundColor?: string;
}>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
	background: ${({ backgroundColor }) => backgroundColor ?? '#f76545'};
	border-radius: 5px;
	z-index: 1;
`;

export const BackCard = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #16285c;
	border-radius: 5px;
`;

export const ImageBackCard = styled.img`
	width: 80%;
	height: auto;
	opacity: 0.8;
`;

export const WrapCardFront = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	border: 2px solid;
	border-image: linear-gradient(var(--angle), red, orange, yellow, green, blue, indigo, violet) 1;
	border: double 2px transparent;
	border-radius: 8px;
	background-image: linear-gradient(white, white),
		linear-gradient(var(--angle), red, orange, yellow, green, blue, indigo, violet);
	background-origin: border-box;
	background-clip: content-box, border-box;
	animation: 10s ${borderAnimation} linear infinite;
	backface-visibility: hidden;
	position: absolute;
	transform-style: preserve-3d;
	transition: all 1s ease;
	transform: rotateY(0deg);
`;

export const WrapCardBack = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transition: all 1s ease;
	transform: rotateY(180deg);
	border: 2px solid;
	border-image: linear-gradient(var(--angle), red, orange, yellow, green, blue, indigo, violet) 1;
	border: double 2px transparent;
	border-radius: 8px;
	background-image: linear-gradient(white, white),
		linear-gradient(var(--angle), red, orange, yellow, green, blue, indigo, violet);
	background-origin: border-box;
	background-clip: content-box, border-box;
	animation: 10s ${borderAnimation} linear infinite;
`;

export const Container = styled.div`
	--angle: 0deg;

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	width: 190px;
	height: 290px;
	position: relative;
	z-index: 1;
`;

export const ImagePokemon = styled.img`
	width: 70%;
	max-height: 60%;
`;

export const CardBody = styled.div<{
	backgroundColor?: string;
}>`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	padding: 1rem;
	color: ${({ backgroundColor }) => fontColorContrast(backgroundColor ?? '#f76545')};

	& h1 {
		font-weight: 700;
		font-size: 16px;
		line-height: 18px;
		font-size: 16px;
	}

	& p {
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
	}
`;

export const Points = styled.div<{
	backgroundColor?: string;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: ${({ backgroundColor }) => fontColorContrast(backgroundColor ?? '#f76545')};
	color: ${({ backgroundColor }) =>
		fontColorContrast(fontColorContrast(backgroundColor ?? '#f76545'))};
	font-weight: 700;
	font-size: 10px;
	line-height: 10px;
	position: absolute;
	top: 5px;
	right: 5px;
`;
