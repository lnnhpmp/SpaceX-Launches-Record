import { Launch } from '../types'

export const onSearch = (searchTerm: string, data: Launch[]) => {
  const searchTerm_ = searchTerm.trim().toLowerCase()

  return data.slice().filter((launch: Launch) => {
    const { launchDetails, name, localDate, youtubeLink } = launch
    return (
      launchDetails?.toLowerCase()?.includes(searchTerm_) ||
      name?.toLowerCase()?.includes(searchTerm_) ||
      localDate?.toLowerCase()?.includes(searchTerm_) ||
      youtubeLink?.toLowerCase()?.includes(searchTerm_)
    )
  })
}
