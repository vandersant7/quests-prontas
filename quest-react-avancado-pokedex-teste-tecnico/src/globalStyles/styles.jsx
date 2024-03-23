import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    :root {
	--color-fire: #ff7402;
	--color-grass: #9bcc50;
	--color-steel: #9eb7b8;
	--color-water: #4592c4;
	--color-psychic: #f366b9;
	--color-ground: #ab9842;
	--color-ice: #51c4e7;
	--color-flying: #3dc7ef;
	--color-ghost: #4d5b64;
	--color-normal: #a4acaf;
	--color-poison: #7e0058;
	--color-rock: #a38c21;
	--color-fighting: #d56723;
	--color-dark: #707070;
	--color-bug: #729f3f;
	--color-dragon: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
	--color-electric: #bba909;
	--color-fairy: #fdb9e9;
	--color-shadow: #7b62a3;
	--color-unknow: #757575;
	--color-primary: #006d77;
	--color-primary-hover: #83c5be;
}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .container-btn-load-more{
	display: flex;
	justify-content: center;

	margin-bottom: 20px;
	margin-top: 20px;
}

.btn-load-more{
	border: none;
	padding: 15px 40px;
	font-family: inherit;
	background-color: var(--color-primary);
	color: #fff;
	border-radius: 10px;
	cursor: pointer;
}

.btn-load-more:hover{
	background-color: var(--color-primary-hover);
	color: #000;
}

.container-filter {
	    display: flex;
	}

	.icon-filter {
		display: flex;
		align-items: center;
		gap: 15px;

		margin-bottom: 20px;
		cursor: pointer;
	}

	.icon-filter .icon {
		width: 30px;
		height: 30px;
		stroke: #555;
		z-index: 1000;
	}



`
