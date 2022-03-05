import styled from 'styled-components/native'

interface ContainerProps {
  backgroundColor: string
}

export const AppContainer = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const OptionsContainer = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  align-items: center;
  padding-vertical: 80px
  flex-direction: column;
`

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const MiniContain = styled.View`
  align-items: center;
  justify-content: center;
`

export const Section = styled.View`
  padding: 30px 24px;
`

export const Row = styled.View`
  flex-direction: row;
`
export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
