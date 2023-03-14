import axios from 'axios';
import { Pokemon } from '../dtos/pokemon';

const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2',
});

interface PokemonAPI {
	name: string;
	url: string;
}

interface Data<T> {
	count: number;
	next: string;
	previous: string;
	results: T;
}

interface PokemonImage {
	sprites: {
		other: {
			dream_world: {
				front_default: string;
			};
			official_artwork: {
				front_default: string;
			};
		};
	};
}

async function getPokemonImage(id: string): Promise<string> {
	try {
		const {
			data: {
				sprites: {
					other: { dream_world, official_artwork },
				},
			},
		} = await api.get<PokemonImage>(`/pokemon/${id}`);

		const url = dream_world.front_default ?? official_artwork.front_default;

		return url;
	} catch (error) {
		throw new Error('Error to get pokemon');
	}
}

interface PokemonSpecies {
	color: {
		name: string;
	};
	flavor_text_entries: [
		{
			flavor_text: string;
			language: {
				name: string;
			};
		},
	];
}

async function getPokemonSpecies(id: string) {
	try {
		const { data } = await api.get<PokemonSpecies>(`/pokemon-species/${id}`);

		const description =
			data.flavor_text_entries.find(
				(flavor) => flavor.language.name === 'en' ?? flavor.language.name === 'es',
			)?.flavor_text ?? '';

		const color = data.color.name;

		return { description, color };
	} catch (error) {
		throw new Error('Error to get pokemon species');
	}
}

async function getPokemons(): Promise<Pokemon[]> {
	try {
		const random = Math.floor(Math.random() * 20) + 1;
		const { data } = await api.get<Data<PokemonAPI[]>>(`/pokemon/?limit=20&offset=${random}`);

		const pokemons = data.results.map((pokemon) => {
			const id = pokemon.url.split('pokemon')[1].replaceAll('/', '');
			return {
				id,
				name: pokemon.name,
				points: Math.floor(Math.random() * (10 + 1)),
				isViewed: false,
			};
		});

		const randomPokemons = pokemons.sort(() => 0.5 - Math.random()).slice(0, 8);

		const pokemonsWithImage = await Promise.all(
			randomPokemons.map(async (pokemon) => {
				const imageUrl = await getPokemonImage(pokemon.id);
				return { ...pokemon, imageUrl };
			}),
		);

		const pokemonsWithSpecies = await Promise.all(
			pokemonsWithImage.map(async (pokemon) => {
				const { description, color } = await getPokemonSpecies(pokemon.id);
				return { ...pokemon, description, color };
			}),
		);

		return pokemonsWithSpecies;
	} catch (error) {
		throw new Error('Error to get pokemons');
	}
}

export { getPokemons };
export default api;
