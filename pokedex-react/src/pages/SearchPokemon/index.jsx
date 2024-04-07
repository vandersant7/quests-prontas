import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useLocation } from "react-router-dom"
import { CardPokemon } from "../../components/CardPokemon"
import { Search } from "./styles"

export const SearchPokemon = () => {

    const location = useLocation()
    console.log(location)

    const { globalPokemons } = useContext(PokemonContext)

    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

    console.log(filteredPokemons)
    return (
        <div className="container">
         {filteredPokemons.length === 1 ? (
            <p>1 resultado encontrado</p>
         ) : (
            <p>{filteredPokemons.length} resultados encontrados</p>
         )}
            
            <Search>
                {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
            </Search>
        </div>
    )
}