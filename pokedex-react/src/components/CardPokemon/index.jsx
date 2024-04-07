import { Link } from 'react-router-dom'
import { Card } from './style'
import { UppercaseLetter } from '../../helper/UppercaseLetter'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const CardPokemon = ({ pokemon }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <Card style={{color: theme.colors.color}}>
        <div className="card-img" style={{color:theme.colors.color, backgroundColor: theme.colors.background}}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className="card-info">
          <span className="pokemon-id">N° {pokemon.id}</span>
          <h3 style={{color: theme.colors.color}}>{UppercaseLetter(pokemon.name)}</h3>
          <div className="card-types">
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={type.type.name}>
                {UppercaseLetter(type.type.name)}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
}
