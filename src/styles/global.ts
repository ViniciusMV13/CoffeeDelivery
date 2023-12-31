import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background: ${(props) => props.theme.background};


  button {
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
}`
