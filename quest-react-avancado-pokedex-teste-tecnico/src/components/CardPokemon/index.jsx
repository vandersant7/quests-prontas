import { Link } from 'react-router-dom'
import { Card } from './style'
import { UppercaseLetter } from '../../helper/UppercaseLetter'

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <Card>
        <div className="card-img">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className="card-info">
          <span className="pokemon-id">N° {pokemon.id}</span>
          <h3>{UppercaseLetter(pokemon.name)}</h3>
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
