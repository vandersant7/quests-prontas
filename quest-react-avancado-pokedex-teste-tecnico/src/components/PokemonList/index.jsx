import { useContext } from "react"
import { Container } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonContext } from "../../context/PokemonContext"
import { Loader } from "../Loader"

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons, theme } = useContext(PokemonContext)

    return(
		
        <Container>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container' style={{color: theme.color, backgroundColor: theme.background }}>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
			
		</Container>
    )
}