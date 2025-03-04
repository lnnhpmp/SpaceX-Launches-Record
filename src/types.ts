export type SortDirection = 'asc' | 'desc'

export type SortBy = 'name' | 'localDate'

export type SortRule = {
  sortDirection: SortDirection
  sortBy: SortBy
}

export type Launch = {
  id: number
  name: string
  localDate: string
  success?: boolean
  launchDetails: string
  imgUrl: string
  youtubeLink: string
}

export type DateRange = {
  from: string | null
  to: string | null
}
