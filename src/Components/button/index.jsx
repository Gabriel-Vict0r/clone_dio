import React from 'react'

import { ButtonContainer} from './styles'
const Button = ({tittle, variant="variant", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {tittle}
    </ButtonContainer>
  )
}

export { Button }