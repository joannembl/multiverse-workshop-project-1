import { Button, TextField } from '@mui/material'
import React from 'react'

function SearchBar() {
  return (
    <div className='search'>
        <TextField fullWidth id='search-bar' label='Search' variant='outlined' />
        <Button id='search-button' variant='contained' >Search</Button>
    </div>
  )
}

export default SearchBar