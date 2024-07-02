import { LaunchesTableRow } from './LaunchesTableRow'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { LaunchesTableHead } from './LaunchesTableHead'
import { Launch, SortRule } from '../../types'

type Props = {
  currentPageLaunches: Launch[]
  setSortRule: (rule: SortRule) => void
}

export const LaunchesTable = ({
  currentPageLaunches,
  setSortRule,
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <LaunchesTableHead
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
