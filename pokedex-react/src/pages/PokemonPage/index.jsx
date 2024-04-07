import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useParams } from "react-router-dom"
import { Loader } from "../../components/Loader"
import { UppercaseLetter } from "../../helper/UppercaseLetter"
import { Main } from "./styles"

export const PokemonPage = () => {
    const { getPokemonById } = useContext(PokemonContext)

    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})
	const [ability, setAbility] = useState([])

    const { id } = useParams()

	const abilities = async id => {
		const data = await getPokemonById(id)
		const results = await data.abilities.map( async (ability) => {
			const res = await fetch(ability.ability.url)
			const data = await res.json()
			return data
		})
		const getPromise = await Promise.all(results)

		const getAbilities = await Promise.all(getPromise)

		const dataAbilities = await getAbilities.map(dataAbility => {
		const { effect_entries, name } = dataAbility
		const englishEntry = effect_entries.find(entry => entry.language.name === 'en')
			return {
				name,
				effect_entries: [
					englishEntry
				]
			}
		})
		console.log(dataAbilities)
		return dataAbilities
	}

    const fetchPokemon = async id => {
        const data = await getPokemonById(id)
		const allAbilities = await abilities(id)
        setPokemon(data)
		setAbility(allAbilities)
        setLoading(false)
    }


    useEffect(() => {
        fetchPokemon(id)
    }, [])

    return (
        <Main>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                       <div className='header-main-pokemon'>
						<span className='number-pokemon'>#{pokemon.id}</span>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1>{UppercaseLetter(pokemon.name)}</h1>
							<div className='card-types info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className="list-abilities">
								<h2>Habilidades</h2>
								{ability.map((ability, index) => (
									<>
									<span key={index}>{UppercaseLetter(ability.name)}: 
									</span>
									<p key={index}>{ability.effect_entries[0].effect}</p>
									<br />
									</>
								))}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
							</div>
						</div>
					</div>

					<div className='container-stats'>
						<h1>Estastísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div> 
                    </>
                )
            }
        </Main>
    )
}