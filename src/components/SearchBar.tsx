import { useCallback, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { TextField, IconButton, InputAdornment } from '@mui/material'

type Props = {
  setSearchTerm: (s: string) => void
}

export const SearchBar = ({ setSearchTerm }: Props) => {
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = useCallback(() => {
    setSearchTerm(searchValue.trim().toLowerCase())
  }, [searchValue])

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSearch}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </div>
  )
}
