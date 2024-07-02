import { DateRange, Launch } from '../types'

export const filterByDateRange = (data: Launch[], dateRange: DateRange) => {
  return data.filter((launch) => {
    const { localDate } = launch
    const { from, to } = dateRange

    if (!from && !to) {
      return true
    }
    if (!from) {
      return localDate <= to
    }
    if (!to) {
      return localDate >= from
    }
    return localDate >= from && localDate <= to
  })
}

export const filterBySuccessInfo = (data: Launch[]) =>
  data.filter((launch) => launch.success)
