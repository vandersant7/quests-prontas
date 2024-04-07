import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  row-gap: 1rem;

  .card-list-pokemon {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`
