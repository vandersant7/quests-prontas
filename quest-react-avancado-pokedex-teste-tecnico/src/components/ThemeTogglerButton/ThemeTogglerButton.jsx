import styled from 'styled-components';
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

let Sun, Moon;

Sun = Moon = styled.svg`
  position: absolute;
  top: 2rem;
  right: 4rem;
  transition: all .5s linear;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 1rem;
    right: 2rem;
  }

  @media (max-width: 375px) {
    right: .8rem;
  }
`;

export const ThemeTogglerButton = () => {
  const { changeButton, toggleTheme} = useContext(ThemeContext)


  return (
    <div onClick={toggleTheme}>
      
      { changeButton ===  'light' ? 
        <Moon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </Moon>
      : 
        <Sun xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </Sun>
      }
    </div>
  )
}
