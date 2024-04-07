import { useContext } from "react";
import { PokemonList } from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { Div } from "./style";


export const HomePage = () => {
	const {onClickLoadMore} = useContext(PokemonContext)
    return (
        <>
			<PokemonList />
		
            <Div className="container-btn-load-more container">
                <button className='btn-load-more'onClick={onClickLoadMore}>
                    Carregar mais
                </button>
            </Div>
		</>
    )
}
