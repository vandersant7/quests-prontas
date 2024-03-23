import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 50px;

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

    display: flex;
    align-items: center;

    position: relative;
  }

  .number-pokemon {
    position: absolute;
    top: -130px;
    left: 0;

    font-size: 200px;
    font-weight: 700;
    color: var(--color-primary-hover);
  }

  .container-img-pokemon {
    order: 2;
    flex: 1;
    padding: 25px 25px 25px 0;
    height: 400px;
  }

  .container-img-pokemon img {
    height: 100%;
    width: 100%;
  }

  .container-info-pokemon {
    display: flex;
    flex-direction: column;

    order: 1;
    flex: 1;
  }

  .container-info-pokemon h1 {
    text-align: right;
    font-size: 60px;
  }

  .info-pokemon {
    display: flex;
    justify-content: space-between;

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

  /* Stats */
  .container-stats {
    display: flex;
    gap: 50px;
    align-items: center;
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
`
