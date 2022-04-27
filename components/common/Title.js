import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1`
  color: var(--primary);
  font-family: 'Comfortaa';
  font-size: 1.8rem;
  font-weight: 300;
`

export default function Title({ title }) {
  return <H1>{title}</H1>
}
