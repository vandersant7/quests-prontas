import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem;

.header-main-pokemon {
      flex-direction: row;
      align-items: center;
    }

  .card-img img {
    width: 100%;
    height: 100%;
  }

  .card-info {
    padding: 0.9375rem;
  }

  .card-info h3 {
    color: #333;
  }

  .pokemon-id {
    display: block;
    color: #888;
    margin-bottom: 0.9375rem;
  }

  .card-types {
    display: flex;
    gap: 0.625rem;
    margin-top: 0.625rem;
  }

  .card-types span {
    font-size: 0.75rem;
    padding: 0.3125rem 1.25rem;
    border-radius: 0.3125rem;
    color: #fff;
  }

  .list-abilities h2 {
    padding: .625rem;
  }

  .list-abilities span {
    font-weight: 700;
  }

.water {
	background-color: var(--color-water);
}

.grass {
	background-color: var(--color-grass);
}

.poison {
	background-color: var(--color-poison);
}

.fire {
	background-color: var(--color-fire);
}

.bug {
	background-color: var(--color-bug);
}

.dragon {
	background: var(--color-dragon);
}

.flying {
	background-color: var(--color-flying);
}

.ground {
	background-color: var(--color-ground);
}

.steel {
	background-color: var(--color-steel);
}

.psychic {
	background-color: var(--color-psychic);
}

.ice {
	background-color: var(--color-ice);
}

.ghost {
	background-color: var(--color-ghost);
}

.normal {
	background-color: var(--color-normal);
}

.rock {
	background-color: var(--color-rock);
}

.electric {
	background-color: var(--color-electric);
}

.fighting {
	background-color: var(--color-fighting);
}

.fairy {
	background-color: var(--color-fairy);
}

.dark {
	background-color: var(--color-dark);
}

  .header-main-pokemon {
    margin-top: 20px;
    padding: 1.25rem;
    display: flex;
    
    @media (max-width: 768px) {
      flex: 1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

  }

  .number-pokemon {
    font-size: 100px;
    font-weight: 700;
    color: var(--color-primary-hover);
  }

  .container-img-pokemon {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 .9375rem;
    width: 100%;
    height: 400px;
  }

  .container-img-pokemon img {
    flex: 1;
    height: auto;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 320px) {
    .container-info-pokemon {
    max-width: 300px;
    padding: 1rem;
  }
  }

  .container-info-pokemon h1 {
    display: flex;
    padding: .9375rem;
    justify-content: center;
    font-size: 50px;
  }

  .info-pokemon {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .group-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .group-info p {
    font-weight: 700;
    font-size: 20px;
  }

  .container-stats {
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }

  .stat-group {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .stat-group span {
    flex: 20%;
    font-weight: 500;
    font-size: 18px;
  }

  .progress-bar {
    width: 100%;
    height: 30px;
    background-color: var(--color-primary);
    border-radius: 10px;
  }
`;
