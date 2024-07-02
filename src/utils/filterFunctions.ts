import { DateRange, Launch } from '../types'

export const filterByDateRange = (data: Launch[], dateRange: DateRange) => {
  const { from, to } = dateRange
  if (!from && !to) {
    return data
  }
  return data.filter((launch) => {
    const { localDate } = launch

    if (!from && to) {
      return localDate <= to
    }
    if (from && !to) {
      return localDate >= from
    }
    if (from && to) {
      return localDate >= from && localDate <= to
    }
    return true
  })
}

export const filterBySuccessInfo = (data: Launch[]) =>
  data.filter((launch) => launch.success)
