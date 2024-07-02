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
    })
  }, [])

  // calculate the number of total pages
  const indexOfLastLaunch = currentPage * LAUNCHES_PER_PAGE
  const indexOfFirstLaunch = indexOfLastLaunch - LAUNCHES_PER_PAGE
  const currentPageLaunches = launchesData.slice(
    indexOfFirstLaunch,
    indexOfLastLaunch,
  )
  const totalPages = Math.ceil(launchesData.length / LAUNCHES_PER_PAGE)

  // show intersection of searched & filtered & original data
  useEffect(() => {
    const filteredData = [originalData]
    if (searchTerm.length) {
      filteredData.push(onSearch(searchTerm, originalData))
    }
    if (showSuccessfulLaunches) {
      filteredData.push(filterBySuccessInfo(originalData))
    }
    if (dateRange) {
      filteredData.push(filterByDateRange(originalData, dateRange))
    }

    setLaunchesData(
      filteredData.reduce((a, b) => a.filter((c) => b.includes(c))),
    )
  }, [searchTerm, showSuccessfulLaunches, dateRange])

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
            setLaunchesData={setLaunchesData}
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
