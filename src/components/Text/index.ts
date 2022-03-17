import styled from 'styled-components/native'

interface TextColorProps {
  color?: string
}

const getTextColor = (color: string | undefined) => (color ? color : 'white')

export const Heading1 = styled.Text<TextColorProps>`
  font-size: 80px;
  font-weight: 100;
  color: ${(props) => getTextColor(props.color)};
`

export const Heading3 = styled.Text<TextColorProps>`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => getTextColor(props.color)};
`

export const Heading6 = styled.Text<TextColorProps>`
  font-size: 30px;
  font-weight: 400;
  color: ${(props) => getTextColor(props.color)};
`
