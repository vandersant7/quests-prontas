import styled from 'styled-components'

export const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 300px;
`

export const Label = styled.label`
	color: #121212;
`

export const Select = styled.select`
		flex: 1;
		width: 150px;
		padding: .3125rem;
		background-color: var(--color-primary);
		color: #fff;
		font-size: 1rem;
		line-height: 1;
		border: 0;
		border-radius: 15px;
		height: 2.125rem;
		-webkit-appearance: none;
		outline: none;
		cursor: pointer;
	
	&&:hover {
    background-color: var(--color-primary-hover);
    color: #000;
	
	option {
		padding: .3125rem;
	}
  }`