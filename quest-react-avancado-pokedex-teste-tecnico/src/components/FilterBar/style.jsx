import styled from 'styled-components'

export const Div = styled.div`
	.filters {
	display: flex;
	justify-content: center;

	position: fixed;
	top: 0;
	left: -300px;
	width: 250px;

	color: #555;
	background-color: #f2f2f2;
	height: 100%;
	padding-top: 140px;
	transition: all 0.3s linear;
}

.filters.active {
	left: 0;
}

.filter-by-type {
	display: flex;
	flex-direction: column;

	gap: 20px;
}

.filter-by-type span {
	font-weight: 700;
	font-size: 22px;
}

.group-type {
	display: flex;
	gap: 10px;

	margin-left: 15px;
}

.group-type label {
	cursor: pointer;
}

`