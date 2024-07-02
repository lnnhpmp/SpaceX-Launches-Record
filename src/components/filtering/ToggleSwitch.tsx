import { useState } from 'react'
import { Switch, FormControlLabel } from '@mui/material'
import { styled } from 'styled-components'

const ToggleSwitchWrapper = styled.div`
  padding-left: 20px;
`
type Props = {
  setShowSuccessfulLaunches: (value: boolean) => void
}

export const ToggleSwitch = ({ setShowSuccessfulLaunches }: Props) => {
  const [checked, setChecked] = useState(false)
  return (
    <ToggleSwitchWrapper>
      <FormControlLabel
        control={<Switch checked={checked} />}
        label={'Show only successful launches'}
        onClick={() => {
          setChecked((checked) => !checked)
          setShowSuccessfulLaunches(!checked)
        }}
      />
    </ToggleSwitchWrapper>
  )
}
