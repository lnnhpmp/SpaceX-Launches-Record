import { Switch, FormControlLabel } from '@mui/material'
import { styled } from 'styled-components'

const ToggleSwitchWrapper = styled.div`
  padding-left: 2%;
`
type Props = {
  setShowSuccessfulLaunches: (value: boolean) => void
  showSuccessfulLaunches: boolean
}

export const ToggleSwitch = ({
  setShowSuccessfulLaunches,
  showSuccessfulLaunches,
}: Props) => {
  return (
    <ToggleSwitchWrapper>
      <FormControlLabel
        control={<Switch checked={showSuccessfulLaunches} />}
        label={'Show only successful launches'}
        onClick={() => {
          setShowSuccessfulLaunches(!showSuccessfulLaunches)
        }}
      />
    </ToggleSwitchWrapper>
  )
}
