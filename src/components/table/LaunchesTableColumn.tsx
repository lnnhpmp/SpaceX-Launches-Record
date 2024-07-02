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
  width?: string
  setSortRule?: any
}

export const LaunchesTableColumn = ({
  label,
  sortBy,
  launchesData,
  width,
  setSortRule,
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
              setSortRule?.(['asc', sortBy])
              return
            }
            const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
            setSortDirection(newSortDirection)
            setSortRule?.([newSortDirection, sortBy])
          }}
        />
      )}
      {label}
    </TableCell>
  )
}
