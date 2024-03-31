import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Div } from './style';

export const FilterBar = () => {
  const { handleSelect, typeSelected } = useContext(PokemonContext);

  return (
    <Div>
      <label htmlFor='typeSelect'>Select Type: </label>
      <select id="typeSelect" value={typeSelected} onChange={handleSelect}>
        <option value=''>None</option>
        <option value='grass'>Grass</option>
        <option value='normal'>Normal</option>
        <option value='fighting'>Fight</option>
        <option value='poison'>Poison</option>
        <option value='ground'>Ground</option>
        <option value='rock'>Rock</option>
        <option value='bug'>Bug</option>
        <option value='Ghost'>Grass</option>
        <option value='steel'>Steel</option>
        <option value='fire'>Fire</option>
        <option value='water'>Water</option>
        <option value='electric'>Electric</option>
        <option value='psychic'>Psychic</option>
        <option value='Ice'>Ice</option>
        <option value='dragon'>Dragon</option>
        <option value='fairy'>Fairy</option>
        <option value='unknow'>Unknow</option>
        <option value='shadow'>Shadow</option>
      </select>
    </Div>
  );
};
