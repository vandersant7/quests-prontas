import styled from 'styled-components'

export const Card = styled.div`
  .card-img {
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3125rem;
    height: 250px;
  }

  .card-img img {
    max-width: 150px;
    height: auto;
    object-fit: contain;
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
    font-weight: 500;
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
`
