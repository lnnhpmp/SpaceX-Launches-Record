import './App.css'
import { useState, useEffect } from 'react'
import { LaunchesTable } from './components/table/LaunchesTable'
import { Pages } from './components/Pages'
import { SearchBar } from './components/SearchBar'
import { Filters } from './components/filtering/Filters'
import { styled } from 'styled-components'
import { DateRange, Launch } from './types'
import { onSearch } from './utils/onSearch'
import { filterByDateRange, filterBySuccessInfo } from './utils/filterFunctions'
import { Typography } from '@mui/material'
import { sortByOrder } from './utils/sortByOrder'

const Header = styled.div`
  padding: 2% 10%;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const LAUNCHES_PER_PAGE = 30

function App() {
  const [originalData, setOriginalData] = useState<Array<Launch>>([])
  const [launchesData, setLaunchesData] = useState<Array<Launch>>([])
  const [isLoading, setIsLoading] = useState('loading')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuccessfulLaunches, setShowSuccessfulLaunches] = useState<boolean>(
    false,
  )
  const [dateRange, setDateRange] = useState<DateRange>()
  const [sortedData, setSortedData] = useState<Array<Launch>>([])
  const [sortRule, setSortRule] = useState<any>()
  const fetchLaunchesData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches', {
        method: 'GET',
      })
      setIsLoading('loaded')
      return response.json()
    } catch (e) {
      setIsLoading('error')
      console.error('fetch data failed: ', e)
    }
  }

  useEffect(() => {
    fetchLaunchesData().then((data) => {
      const mappedData = data.map((e: any, index: number) => ({
        id: index,
        name: e.name,
        localDate: e.date_local,
        success: e.success,
        launchDetails: e.details ?? '',
        imgUrl: e.links.patch.small ?? '',
        youtubeLink: e.links.webcast ?? '',
      }))
      setLaunchesData(mappedData)
      setOriginalData(mappedData)
      setSortedData(mappedData)
    })
  }, [])

  const indexOfLastLaunch = currentPage * LAUNCHES_PER_PAGE
  const indexOfFirstLaunch = indexOfLastLaunch - LAUNCHES_PER_PAGE
  const currentPageLaunches = launchesData.slice(
    indexOfFirstLaunch,
    indexOfLastLaunch,
  )
  // calculate the number of total pages
  const totalPages = Math.ceil(launchesData.length / LAUNCHES_PER_PAGE)

  // handle intersection of searched & filtered & table data
  useEffect(() => {
    const filteredData = [originalData]
    if (sortRule?.length == 2) {
      const sortedData = sortByOrder(originalData, sortRule[0], sortRule[1])
      filteredData.push(sortedData)
    }
    if (searchTerm.length) {
      filteredData.push(onSearch(searchTerm, originalData))
    }
    if (showSuccessfulLaunches) {
      filteredData.push(filterBySuccessInfo(originalData))
    }
    if (dateRange) {
      filteredData.push(filterByDateRange(originalData, dateRange))
    }

    // calculate arrays intersection
    setLaunchesData(
      filteredData.reduce((a, b) => a.filter((c) => b.includes(c))),
    )
    // reset page to 1 so that pagination can work
    setCurrentPage(1)
  }, [searchTerm, showSuccessfulLaunches, dateRange, originalData, sortRule])

  return (
    <>
      {isLoading === 'loaded' && (
        <>
          <Header>
            <Title>
              <Typography variant="h5">SpaceX Launches Records</Typography>{' '}
            </Title>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Filters
              setShowSuccessfulLaunches={setShowSuccessfulLaunches}
              setDateRange={setDateRange}
              showSuccessfulLaunches={showSuccessfulLaunches}
            />
          </Header>
          <LaunchesTable
            currentPageLaunches={currentPageLaunches}
            launchesData={launchesData}
            setSortRule={setSortRule}
          />
          <Pages setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
      )}
      {isLoading === 'loading' && <h1>loading....</h1>}
      {isLoading === 'error' && <h1>Error....</h1>}
    </>
  )
}

export default App
