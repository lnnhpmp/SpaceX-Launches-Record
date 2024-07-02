import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Launch } from '../../types'
import { LaunchesTableColumn } from './LaunchesTableColumn'

type Props = {
  launchesData: Launch[]
  setLaunchesData: (data: Launch[]) => void
}

export const LaunchesTableHead = ({ setLaunchesData, launchesData }: Props) => {
  return (
    <TableHead>
      <TableRow>
        <LaunchesTableColumn label={'id'} width={'2%'} />
        <LaunchesTableColumn
          setLaunchesData={setLaunchesData}
          sortBy={'name'}
          launchesData={launchesData}
          label={'Name'}
        />
        <LaunchesTableColumn
          setLaunchesData={setLaunchesData}
          sortBy={'localDate'}
          launchesData={launchesData}
          label={'Date'}
          width={'8%'}
        />
        <LaunchesTableColumn label={'Succeeded'} width={'8%'} />
        <LaunchesTableColumn label={'Details'} width={'30%'} />
        <LaunchesTableColumn label={'Image'} width={'10%'} />
        <LaunchesTableColumn label={'Youtube Link'} />
      </TableRow>
    </TableHead>
  )
}
