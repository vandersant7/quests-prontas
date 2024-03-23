import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Div } from './style';

export const FilterBar = () => {
  const { active, handleCheckbox } = useContext(PokemonContext);

  return (
    <Div>
      <div className={`filters ${active ? 'active' : ''}`}>
        <div className="filter-by-type">
          <span>Tipos</span>

          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="grass"
              id="grass"
            />
            <label htmlFor="grass">Planta</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="fire"
              id="fire"
            />
            <label htmlFor="fire">Fogo</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="bug"
              id="bug"
            />
            <label htmlFor="bug">Inseto</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="fairy"
              id="fairy"
            />
            <label htmlFor="fairy">Fada</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="dragon"
              id="dragon"
            />
            <label htmlFor="dragon">Dragão</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="shadow"
              id="shadow"
            />
            <label htmlFor="shadow">Fantasma</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="ground"
              id="ground"
            />
            <label htmlFor="ground">Terra</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="normal"
              id="normal"
            />
            <label htmlFor="normal">Normal</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="psychic"
              id="psychic"
            />
            <label htmlFor="psychic">Psíquico</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="steel"
              id="steel"
            />
            <label htmlFor="steel">Aço</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="dark"
              id="dark"
            />
            <label htmlFor="dark">Sombrio</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="electric"
              id="electric"
            />
            <label htmlFor="electric">Elétrico</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="fighting"
              id="fighting"
            />
            <label htmlFor="fighting">Lutador</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="flying"
              id="flying"
            />
            <label htmlFor="flying">Voador</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="ice"
              id="ice"
            />
            <label htmlFor="ice">Gelo</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="poison"
              id="poison"
            />
            <label htmlFor="poison">Venenoso</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name="rock"
              id="rock"
            />
            <label htmlFor="rock">Pedra</label>
          </div>
          <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='water'
                id='water'
            />
            <label htmlFor='water'>Água</label>
        </div>
        </div>
      </div>
    </Div>
  );
};
