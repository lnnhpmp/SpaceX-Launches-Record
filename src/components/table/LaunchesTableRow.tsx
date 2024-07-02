import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { styled } from 'styled-components'
import Link from '@mui/material/Link'
import { Launch } from '../../types'

const ImgContainer = styled.img`
  width: 50%;
  height: 50%;
`

type Props = {
  launch: Launch
}

export const LaunchesTableRow = ({ launch }: Props) => {
  const {
    id,
    name,
    localDate,
    success,
    launchDetails,
    imgUrl,
    youtubeLink,
  } = launch
  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{localDate.split('T')[0]}</TableCell>
      <TableCell align="left">{success ? 'yes' : 'no'}</TableCell>
      <TableCell align="left">
        {launchDetails.length ? launchDetails : 'No details'}
      </TableCell>
      <TableCell align="left">
        <ImgContainer src={imgUrl} alt="no image available" />
      </TableCell>
      <TableCell align="left">
        {youtubeLink.length ? (
          <Link href={youtubeLink}>{youtubeLink}</Link>
        ) : (
          'No youtube video'
        )}
      </TableCell>
    </TableRow>
  )
}
