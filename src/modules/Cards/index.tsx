import * as Styles from './styles';
import { useQuery } from 'react-query';

import Pokeball from '../../assets/pokeball.svg';

import { Button } from './components/ui/Button';
import { Card } from './components/common/Card';
import { Header } from './components/common/Header';
import { getPokemons } from '../../services/api';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Pokemon } from '../../dtos/pokemon';
import { useNameState } from '../../stores/inputState';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';

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
	const buttonViewCard = useRef<HTMLButtonElement>(null);
	const buttonShuffleCards = useRef<HTMLButtonElement>(null);

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
					if (index === pokemons.length - 1 && buttonViewCard.current) {
						buttonViewCard.current.disabled = true;
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

		if (buttonShuffleCards.current) {
			buttonShuffleCards.current.disabled = true;
		}

		if (pokemons) {
			const isShuffle = pokemons
				.filter((item) => item.isViewed === true)
				.sort(() => Math.random() - 0.5);

			const isNotShuffle = pokemons.filter((item) => item.isViewed === false);

			setPokemons(pokemons.map((item) => ({ ...item, isViewed: false })));

			const newPokemons = [...isShuffle, ...isNotShuffle];

			setTimeout(() => {
				setPokemons(newPokemons);
				if (buttonShuffleCards.current) {
					buttonShuffleCards.current.disabled = false;
				}
			}, 2000);
		}
	}

	return (
		<Styles.Container>
			{!pokemons && <Loading />}
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
				{pokemons && (
					<Styles.BoxButton>
						<Button ref={buttonShuffleCards} type="button" variant onClick={handleShuffleCards}>
							Embaralhar
						</Button>
						<Button ref={buttonViewCard} type="button" onClick={handleViewCards}>
							Virar +1
						</Button>
					</Styles.BoxButton>
				)}
			</Styles.ContainerCards>
		</Styles.Container>
	);
}

export default Cards;
