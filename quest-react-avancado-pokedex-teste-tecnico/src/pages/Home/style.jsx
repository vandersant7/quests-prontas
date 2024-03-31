import styled from "styled-components";

export const Div = styled.div`
    padding: 1.25rem 0;
	display: flex;
	justify-content: center;

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
`