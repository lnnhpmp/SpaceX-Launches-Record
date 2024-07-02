import { describe, it } from '@jest/globals'
import { onSearch } from '../../utils/onSearch'
import { Launch } from '../../types'
const data = [
  {
    id: 0,
    name: 'name',
    localDate: '2010-01-01',
    success: true,
    launchDetails: 'launch details',
    imgUrl: 'test url',
    youtubeLink: 'youtube id',
  } as Launch,
]

describe('OnSearch', () => {
  it('should be case insensitive search', () => {
    expect(onSearch('Launch', data).length).toEqual(1)
  })

  it('should not search in local date', () => {
    expect(onSearch('2010', data).length).toEqual(0)
  })

  it('should search in name, details and youtube link', () => {
    expect(onSearch('name', data)).toEqual(data)
    expect(onSearch('details', data)).toEqual(data)
    expect(onSearch('youtube', data)).toEqual(data)
  })
})
