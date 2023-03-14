import { Button } from './components/ui/Button';
import { InputName } from './components/ui/InputName';

import * as Styles from './styles';

import Pokeball from '../../assets/pokeball.svg';
import Pokemon from '../../assets/pokemon.svg';
import { useNavigate } from 'react-router-dom';
import { useNameState } from '../../stores/inputState';

function Home() {
	const navigate = useNavigate();
	const { name } = useNameState();

	function handleClick() {
		navigate('/cards');
	}

	return (
		<Styles.Container>
			<Styles.ImagePokeBall src={Pokeball} alt="Pokeball" />
			<Styles.Box>
				<Styles.Logo src={Pokemon} alt="Logo do pokemon" />
				<InputName
					onKeyDown={(event) => {
						if (event.key === 'Enter' && name.trim().length > 0) {
							handleClick();
						}
					}}
				/>
				<Button onClick={handleClick} disabled={name.trim().length === 0}>
					Ver cartas
				</Button>
			</Styles.Box>
		</Styles.Container>
	);
}

export default Home;
