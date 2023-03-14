import * as Styles from './styles';
import LogoPokemon from '../../../../../assets/pokemon.svg';
import { useNameState } from '../../../../../stores/inputState';

function Header() {
	const { name } = useNameState();

	return (
		<Styles.Header>
			<nav>
				<ul>
					<li>
						<img
							src={LogoPokemon}
							alt="Logo"
							style={{
								width: '165px',
							}}
						/>
					</li>
					<li>
						<h1>{name}</h1>
					</li>
				</ul>
			</nav>
		</Styles.Header>
	);
}

export { Header };
