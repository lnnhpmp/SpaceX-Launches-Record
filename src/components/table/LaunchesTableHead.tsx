import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Launch } from '../../types'
import { LaunchesTableColumn } from './LaunchesTableColumn'

type Props = {
  launchesData: Launch[]
  setSortRule: any
}

export const LaunchesTableHead = ({ launchesData, setSortRule }: Props) => {
  return (
    <TableHead>
      <TableRow>
        <LaunchesTableColumn label={'id'} width={'2%'} />
        <LaunchesTableColumn
          sortBy={'name'}
          launchesData={launchesData}
          label={'Name'}
          setSortRule={setSortRule}
        />
        <LaunchesTableColumn
          sortBy={'localDate'}
          launchesData={launchesData}
          label={'Date'}
          width={'8%'}
          setSortRule={setSortRule}
        />
        <LaunchesTableColumn label={'Succeeded'} width={'8%'} />
        <LaunchesTableColumn label={'Details'} width={'30%'} />
        <LaunchesTableColumn label={'Image'} width={'10%'} />
        <LaunchesTableColumn label={'Youtube Link'} />
      </TableRow>
    </TableHead>
  )
}
