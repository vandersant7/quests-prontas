import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .card-list-pokemon {
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 500px) {
   .card-list-pokemon {
    grid-template-columns: repeat(2, 1fr);
   }
  }


  @media (min-width: 768px) {
    .card-list-pokemon {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .card-list-pokemon {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .card-list-pokemon {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`
