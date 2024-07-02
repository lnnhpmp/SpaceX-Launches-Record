import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Launch } from '../../types'
import { LaunchesTableColumn } from './LaunchesTableColumn'

type Props = {
  launchesData: Launch[]
  setSortedData: (data: Launch[]) => void
}

export const LaunchesTableHead = ({ launchesData, setSortedData }: Props) => {
  return (
    <TableHead>
      <TableRow>
        <LaunchesTableColumn label={'id'} width={'2%'} />
        <LaunchesTableColumn
          sortBy={'name'}
          launchesData={launchesData}
          label={'Name'}
          setSortedData={setSortedData}
        />
        <LaunchesTableColumn
          sortBy={'localDate'}
          launchesData={launchesData}
          label={'Date'}
          width={'8%'}
          setSortedData={setSortedData}
        />
        <LaunchesTableColumn label={'Succeeded'} width={'8%'} />
        <LaunchesTableColumn label={'Details'} width={'30%'} />
        <LaunchesTableColumn label={'Image'} width={'10%'} />
        <LaunchesTableColumn label={'Youtube Link'} />
      </TableRow>
    </TableHead>
  )
}
