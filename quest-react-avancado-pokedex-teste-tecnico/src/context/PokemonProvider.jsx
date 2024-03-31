import { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hook/useForm'
import { themes } from '../globalStyles/theme'

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([])
  const [globalPokemons, setGlobalPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  })

  const [loading, setLoading] = useState(true)

  
  const [ theme, setTheme ] = useState(themes.light)
  
  const getAllPokemons = async () => {
    const limit = 10
    const totalPokemons = 151

    const baseURL = 'https://pokeapi.co/api/v2/'
    const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
    const data = await res.json()

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })

    const results = await Promise.all(promises)


    if (offset < totalPokemons - limit) {
      setAllPokemons([...allPokemons, ...results])
    } else {
      const remainingPokemons = totalPokemons - allPokemons.length
      setAllPokemons([...allPokemons, ...results.slice(0, remainingPokemons)])
    }
    setLoading(false)
  }

  const getGlobalPokemons = async (limit = 151) => {
    const baseURL = 'https://pokeapi.co/api/v2/'

    const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=0`)
    const data = await res.json()

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })

    const results = await Promise.all(promises)

    console.log(results)

    setGlobalPokemons(results)
    setLoading(false)
  }

  const getPokemonById = async (id) => {
    const baseURL = 'https://pokeapi.co/api/v2/'

    const res = await fetch(`${baseURL}pokemon/${id}`)
    const data = await res.json()
    return data
  }

  useEffect(() => {
    getAllPokemons()
  }, [offset])

  useEffect(() => {
    getGlobalPokemons(151)
  }, [])

  const onClickLoadMore = () => {
    if (offset < 141) {
      setOffset(offset + 10)
    }
  }

  const [typeSelected, setTypeSelected] = useState({
    all: false,
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  })

  const [filteredPokemons, setfilteredPokemons] = useState([])

  const handleSelect = (e) => {
   const selectedType = e.target.value
   setTypeSelected({...typeSelected,
  [selectedType]: true})
  
    if (selectedType !== '') {
      const resultsFiltered = globalPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(selectedType)
      );
      setfilteredPokemons(resultsFiltered);
    } else {
      setfilteredPokemons([])
    }
  };

  

  return (
    <PokemonContext.Provider
      value={{
        theme,
        setTheme,
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonById,
        onClickLoadMore,
        loading,
        setLoading,
        handleSelect,
        setTypeSelected,
        filteredPokemons
      }}>
      {children}
    </PokemonContext.Provider>
  )
}
