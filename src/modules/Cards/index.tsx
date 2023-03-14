import * as Styles from './styles';
import { useQuery } from 'react-query';

import Pokeball from '../../assets/pokeball.svg';

import { Button } from './components/ui/Button';
import { Card } from './components/common/Card';
import { Header } from './components/common/Header';
import { getPokemons } from '../../services/api';
import { MouseEvent, useEffect, useState } from 'react';
import { Pokemon } from '../../dtos/pokemon';
import { useNameState } from '../../stores/inputState';
import { useNavigate } from 'react-router-dom';

function Cards() {
	const { name } = useNameState();
	const navigate = useNavigate();

	useEffect(() => {
		if (!name) {
			navigate('/');
		}
	}, []);

	const [pokemons, setPokemons] = useState<Pokemon[]>();
	const { data, isSuccess } = useQuery('pokemons', async () => await getPokemons());
	const [disableButtonViewCard, setDisableButtonViewCard] = useState(false);

	useEffect(() => {
		if (isSuccess) {
			const newPokemons = data.map((item: Pokemon, index) => {
				if (index < 5) {
					return { ...item, isViewed: true };
				} else {
					return item;
				}
			});

			setPokemons(newPokemons);
		}
	}, [isSuccess]);

	function handleViewCards(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		let count = 0;

		if (pokemons) {
			const newPokemons = pokemons.map((item, index) => {
				if (count < 1 && !item.isViewed) {
					if (index === pokemons.length - 1) {
						setDisableButtonViewCard(true);
					}
					count++;
					return { ...item, isViewed: true };
				} else {
					return item;
				}
			});

			setPokemons(newPokemons);
		}
	}

	function handleShuffleCards(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		if (pokemons) {
			const isShuffle = pokemons
				.filter((item) => item.isViewed === true)
				.sort(() => Math.random() - 0.5);

			const isNotShuffle = pokemons.filter((item) => item.isViewed === false);

			setPokemons(pokemons.map((item) => ({ ...item, isViewed: false })));

			const newPokemons = [...isShuffle, ...isNotShuffle];

			setTimeout(() => {
				setPokemons(newPokemons);
			}, 2000);
		}
	}

	return (
		<Styles.Container>
			<Header />
			<Styles.ImagePokeBall src={Pokeball} alt="Pokeball" />
			<Styles.ContainerCards>
				{pokemons &&
					pokemons.map((item) => {
						return (
							<Card
								key={item.id}
								color={item.color}
								description={item.description}
								imageUrl={item.imageUrl}
								name={item.name}
								points={item.points}
								isView={item.isViewed}
							/>
						);
					})}
				<Styles.BoxButton>
					<Button type="button" variant onClick={handleShuffleCards}>
						Embaralhar
					</Button>
					<Button type="button" onClick={handleViewCards} disabled={disableButtonViewCard}>
						Virar +1
					</Button>
				</Styles.BoxButton>
			</Styles.ContainerCards>
		</Styles.Container>
	);
}

export default Cards;
