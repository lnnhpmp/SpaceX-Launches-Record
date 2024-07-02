import TableSortLabel from '@mui/material/TableSortLabel'
import { useState } from 'react'
import { SortDirection, SortBy, Launch } from '../../types'
import TableCell from '@mui/material/TableCell'
import { sortByOrder } from '../../utils/sortByOrder'
import { styled } from 'styled-components'

const SortToggle = styled(TableSortLabel)`
  cursor: pointer;
`

type Props = {
  label: string
  sortBy?: SortBy
  launchesData?: Launch[]
  setLaunchesData?: (data: Launch[]) => void
  width?: string
}

export const LaunchesTableColumn = ({
  label,
  sortBy,
  setLaunchesData,
  launchesData,
  width,
}: Props) => {
  const [sortDirection, setSortDirection] = useState<SortDirection | undefined>(
    undefined,
  )
  return (
    <TableCell width={width ?? '5%'}>
      {sortBy && (
        <SortToggle
          active={true}
          direction={sortDirection}
          onClick={() => {
            if (!sortDirection) {
              setSortDirection('asc')
              setLaunchesData?.(sortByOrder(launchesData, 'asc', sortBy))
              return
            }
            const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
            setLaunchesData?.(
              sortByOrder(launchesData, newSortDirection, sortBy),
            )
            setSortDirection(newSortDirection)
          }}
        />
      )}
      {label}
    </TableCell>
  )
}
