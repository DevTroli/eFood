import styled from 'styled-components'

export const Container = styled.section`
  margin: 64px 0 72px;
  padding: 8px;

  @media (max-width: 768px) {
    margin: 24px 60px;
  }
`

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }
`
