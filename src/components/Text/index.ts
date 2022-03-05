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

export const Heading2 = styled.Text<TextColorProps>`
  font-size: 25px;
  font-weight: 200;
  color: ${(props) => getTextColor(props.color)};
`

export const Heading3 = styled.Text<TextColorProps>`
  font-size: 24px;
  font-weight: 300;
  color: ${(props) => getTextColor(props.color)};
`

export const Heading4 = styled.Text<TextColorProps>`
  font-size: 22px;
  font-weight: 300;
  color: ${(props) => getTextColor(props.color)};
`

export const Heading5 = styled.Text<TextColorProps>`
  font-size: 15px;
  font-weight: 300;
  color: ${(props) => getTextColor(props.color)};
`

export const Heading6 = styled.Text<TextColorProps>`
  font-size: 24px;
  font-weight: 300;
  color: ${(props) => getTextColor(props.color)};
`

export const BasicText = styled.Text<TextColorProps>`
  font-size: 15px;
  color: ${(props) => getTextColor(props.color)};
`
