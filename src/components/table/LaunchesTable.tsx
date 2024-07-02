import { LaunchesTableRow } from './LaunchesTableRow'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { LaunchesTableHead } from './LaunchesTableHead'
import { Launch } from '../../types'

type Props = {
  currentPageLaunches: Launch[]
  launchesData: Launch[]
  setLaunchesData: (data: Launch[]) => void
  setSortedData: any
}

export const LaunchesTable = ({
  currentPageLaunches,
  launchesData,
  setLaunchesData,
  setSortedData
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <LaunchesTableHead
        launchesData={launchesData}
        setLaunchesData={setLaunchesData}
        setSortedData={setSortedData}
      />
      <TableBody>
        {currentPageLaunches.map((launch: Launch, index: number) => (
          <LaunchesTableRow launch={launch} key={index} />
        ))}
      </TableBody>
    </TableContainer>
  )
}
