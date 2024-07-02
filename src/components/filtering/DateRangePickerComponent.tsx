import { Typography } from '@mui/material'
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DateRange } from '../../types'

type Props = {
  setDateRange: (value: DateRange) => void
}

export const DateRangePickerComponent = ({ setDateRange }: Props) => {
  const formatDate = (d: Date | null) => {
    if (d) {
      return d.toLocaleDateString().split('/').reverse().join('-')
    }
    return ''
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="subtitle1">Select launch date range</Typography>
      <DateRangePicker
        localeText={{
          start: 'Earliest launch date',
          end: 'Latest launch date',
        }}
        onChange={(e) => {
          setDateRange({
            from: formatDate(e[0]),
            to: formatDate(e[1]),
          })
        }}
      />
    </LocalizationProvider>
  )
}
