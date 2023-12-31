import styled from 'styled-components'
export const HeaderFixed = styled.div``
export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem clamp(2rem, 100%, 20rem);

  nav {
    gap: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    font-size: 0.875rem;
    white-space: nowrap;
  }
`

export const Cart = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Counter = styled.div`
  p {
    position: absolute;
    margin-left: -10px;
    margin-top: -29px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`
