import * as Styles from './styles';

import Pokeball from '../../assets/pokeball.svg';

function Cards() {
	return (
		<Styles.Container>
			<Styles.ImagePokeBall src={Pokeball} alt="Pokeball" />
			<h1>404</h1>
			<h2>Página não encontrada</h2>
		</Styles.Container>
	);
}

export default Cards;
