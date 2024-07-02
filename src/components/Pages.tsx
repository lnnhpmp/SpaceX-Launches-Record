import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import { styled } from 'styled-components'

const Page = styled(Pagination)`
  position: fixed;
  bottom: 0;
  width: 100%;

  ul {
    justify-content: center;
  }
`

type Props = {
  setCurrentPage: (n: number) => void
  totalPages: number
  currentPage: number
}

export const Pages = ({ setCurrentPage, totalPages, currentPage }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }
  return (
    <Page count={totalPages} color="primary" onChange={handleChange} page={currentPage} />
  )
}
