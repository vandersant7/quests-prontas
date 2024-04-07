import { Link, useNavigate } from 'react-router-dom'
import { Container } from './style'
import { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { ThemeTogglerButton } from '../ThemeTogglerButton/ThemeTogglerButton'
import { ThemeContext } from '../../context/ThemeContext'

export const Header = () => {

    const { valueSearch, onInputChange, onResetForm } = useContext(PokemonContext)
    const { theme } = useContext(ThemeContext)

    const navigate = useNavigate()

    const onSearchSubmit = (e) => {
      e.preventDefault()
      navigate('/search', {state: valueSearch})

      onResetForm()
    }
  
  return (
    <Container className="container">

      <Link to="/" className="logo">
        <img src="/pokeapi.svg" alt="Logo Pokedex" />
      </Link>

      <div className='container-dark-mode'>
     <ThemeTogglerButton />
      </div>

      <form onSubmit={onSearchSubmit}>
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-search">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            style={{backgroundColor: theme.colors.backgroundInput, caretColor: theme.colors.caretColor}}
            type="search"
            name="valueSearch"
            id=""
            value={valueSearch}
            onChange={onInputChange}
            placeholder="Buscar pokemon"
          />
        </div>
        <button className='btn-search'>Ir</button>
      </form>
    </Container>
  )
}
