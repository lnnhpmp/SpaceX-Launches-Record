import { SortDirection, SortBy } from '../types'

export const sortByOrder = (
  data: any,
  sortDirection: SortDirection,
  sortBy: SortBy,
) => {
  if (sortBy === 'name') {
    const sortedData = data.slice().sort((a: any, b: any) => {
      return a.name.localeCompare(b.name)
    })

    return sortDirection === 'asc' ? sortedData : sortedData.reverse()
  }

  if (sortBy === 'localDate') {
    const sortedData = data.slice().sort((a: any, b: any) => {
      const d1 = Date.parse(a.localDate)
      const d2 = Date.parse(b.localDate)
      return d1 > d2 ? 1 : -1
    })
    return sortDirection === 'asc' ? sortedData : sortedData.reverse()
  }

  return data
}
