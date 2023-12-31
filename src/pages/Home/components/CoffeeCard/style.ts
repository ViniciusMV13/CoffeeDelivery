import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem;
  justify-content: space-between;
  flex-shrink: 0;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  margin-bottom: 2.5rem;
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`
export const CoffeeTagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CoffeeTag = styled.p`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 0.75rem;
  text-align: center;
`
export const CoffeeName = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  margin-top: 1rem;
`
export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  text-align: center;
`
export const BuyCoffee = styled.div`
  width: 100%;
  align-items: center;
  padding: 1.5rem 0.25rem;
  display: flex;
  justify-content: space-between;
`

export const BuyActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeePrice = styled.div`
  color: ${(props) => props.theme['base-text']};
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.25rem;
`
export const CoffeeCoin = styled.p`
  font-style: 0.875rem;
  line-height: 130%;
`
export const CoffeeValue = styled.p`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
`

export const CoffeeQuantity = styled.div`
  display: flex;
  height: 2.375rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`
export const CoffeeQuantityButton = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
`
export const CoffeeQuantityNumber = styled.p`
  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  width: 1.25rem;
`

export const CoffeeCartAdd = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme['purple-dark']};
`
