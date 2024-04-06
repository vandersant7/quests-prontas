import { useContext } from "react"
import { Container } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonContext } from "../../context/PokemonContext"
import { Loader } from "../Loader"
import { FilterBar } from "../FilterBar"
import { ThemeContext } from "../../context/ThemeContext"

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons} = useContext(PokemonContext)
	const { theme } = useContext(ThemeContext)

    return(

        <Container>
			{loading ? (
				<Loader />
			) : (
				<>
				<FilterBar />
				
				<div className='card-list-pokemon container' style={{color: theme.colors.color, background: theme.colors.background }}>
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
				</>
			)}
			
		</Container>
    )
}