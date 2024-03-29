import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card-list-pokemon {
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 425px) {
   .card-list-pokemon {
    grid-template-columns: repeat(3, 1fr);
   }
  }

  @media (min-width: 1200px) {
    .card-list-pokemon {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`
