import { DateRangePickerComponent } from './DateRangePickerComponent'
import { ToggleSwitch } from './ToggleSwitch'
import { styled } from 'styled-components'
import { DateRange } from '../../types'

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
`

const DataRangeContainer = styled.div`
  height: 80%;
`

type Props = {
  setShowSuccessfulLaunches: (value: boolean) => void
  setDateRange: (value: DateRange) => void
}

export const Filters = ({ setShowSuccessfulLaunches, setDateRange }: Props) => {
  return (
    <FiltersWrapper>
      <DataRangeContainer>
        <DateRangePickerComponent setDateRange={setDateRange}/>
      </DataRangeContainer>
      <ToggleSwitch setShowSuccessfulLaunches={setShowSuccessfulLaunches} />
    </FiltersWrapper>
  )
}
