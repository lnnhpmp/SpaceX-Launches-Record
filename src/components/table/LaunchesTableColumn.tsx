import TableSortLabel from '@mui/material/TableSortLabel'
import { useState } from 'react'
import { SortDirection, SortBy, SortRule } from '../../types'
import TableCell from '@mui/material/TableCell'
import { styled } from 'styled-components'

const SortToggle = styled(TableSortLabel)`
  cursor: pointer;
`

type Props = {
  label: string
  sortBy?: SortBy
  width?: string
  setSortRule?: (rule: SortRule) => void
}

export const LaunchesTableColumn = ({
  label,
  sortBy,
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
              setSortRule?.({ sortDirection: 'asc', sortBy })
              return
            }
            const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
            setSortDirection(newSortDirection)
            setSortRule?.({ sortDirection: newSortDirection, sortBy })
          }}
        />
      )}
      {label}
    </TableCell>
  )
}
