import * as Styles from './styles';

import Pokeball from '../../../../../assets/pokeball.svg';

interface Props {
	imageUrl: string;
	name: string;
	description: string;
	color: string;
	points: number;
	isView: boolean;
}

function Card(props: Props) {
	const { imageUrl, name, description, color, points, isView } = props;

	const variants = {
		isView: {
			rotateY: 0,
		},
		isNotView: {
			rotateY: 180,
		},
	};

	return (
		<Styles.Container>
			<Styles.WrapCardFront
				variants={variants}
				initial="isNotView"
				animate={isView ? 'isView' : 'isNotView'}
			>
				<Styles.FrontCard backgroundColor={color}>
					<Styles.Points backgroundColor={color}>{points}</Styles.Points>
					<Styles.ImagePokemon src={imageUrl} alt={name} />
					<Styles.CardBody backgroundColor={color}>
						<h1>{name}</h1>
						<p>{description}</p>
					</Styles.CardBody>
				</Styles.FrontCard>
			</Styles.WrapCardFront>
			<Styles.WrapCardBack
				variants={variants}
				initial="isNotView"
				animate={isView ? 'isNotView' : 'isView'}
			>
				<Styles.BackCard>
					<Styles.ImageBackCard src={Pokeball} alt="Pokeball" />
				</Styles.BackCard>
			</Styles.WrapCardBack>
		</Styles.Container>
	);
}

export { Card };
