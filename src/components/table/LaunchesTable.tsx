import { LaunchesTableRow } from './LaunchesTableRow'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { LaunchesTableHead } from './LaunchesTableHead'
import { Launch } from '../../types'

type Props = {
  currentPageLaunches: Launch[]
  launchesData: Launch[]
  setSortRule: any
}

export const LaunchesTable = ({
  currentPageLaunches,
  launchesData,
  setSortRule
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <LaunchesTableHead
        launchesData={launchesData}
        setSortRule={setSortRule}
      />
      <TableBody>
        {currentPageLaunches.map((launch: Launch, index: number) => (
          <LaunchesTableRow launch={launch} key={index} />
        ))}
      </TableBody>
    </TableContainer>
  )
}
