import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;


  a {
    margin-bottom: .9375rem;
    padding: 2%;
    max-width: 350px;
    display: flex;
    justify-content: center;
  }


  .logo img {
    width: 200px;
    height: auto;
    margin: 1.25rem;
  }

    form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .625rem;
    padding: .8rem;

    
  }

  .form-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .625rem;
    border: 1px solid #555;
    padding: .9375rem 1.25rem;
    border-radius: 1.5625rem;

    
  }

  .form-group input {
    flex: 1;
    font-family: inherit;
    width: 100%;
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
    display: flex;
    align-items: center;
    gap: .625rem;

}
`
