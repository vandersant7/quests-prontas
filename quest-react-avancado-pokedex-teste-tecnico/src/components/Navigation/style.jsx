import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .logo img {
    width: 150px;
    margin: 1.25rem;
  }

    form {
    display: flex;
    align-items: center;
    gap: .9375rem;
  }

  .form-group {
    display: flex;
    align-items: center;
    gap: .625rem;

    border: 1px solid #555;
    padding: .9375rem 1.25rem;
    border-radius: 1.5625rem;
  }

  .form-group input {
    font-family: inherit;
    width: 300px;
    border: none;
    outline: none;
    font-size: .9375rem;
  }

  .icon-search {
    width: 1.25rem;
    height: 1.25remx;
    stroke: #555;
  }

  .btn-search {
    border: none;
    outline: none;
    border-radius: 1.5625rem;
    padding: .9375rem 1.875rem;
    font-family: inherit;
    color: #fff;
    background-color: var(--color-primary);
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .btn-search:hover {
    background-color: var(--color-primary-hover);
    color: #000;
  }

  .container-dark-mode {
    margin: .625rem;
    display: flex;
    align-items: center;
    gap: .625rem;
  } 
`
