import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Label, Select } from './style';
import { ThemeContext } from '../../context/ThemeContext';

export const FilterBar = () => {
  const { handleSelect, typeSelected } = useContext(PokemonContext);
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <Label htmlFor='typeSelect' style={{color: theme.colors.color}}>Select Type: </Label>
      <Select id="typeSelect" value={typeSelected} onChange={handleSelect}>
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
      </Select>
    </div>
  );
};
