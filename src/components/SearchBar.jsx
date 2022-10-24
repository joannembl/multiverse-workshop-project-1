import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField, IconButton } from '@mui/material';
import { ClearSharp } from '@mui/icons-material';
import { clearSearchTerm, setSearchTerm, selectSearchTerm } from '../features/carPageSlice';

function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setSearchTerm(e.target.value));
  }

  const onClear = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className='search'>
        <TextField 
          fullWidth id='search-bar' 
          label='Search' 
          variant='outlined'
          onChange={handleInput}
          value={searchTerm}
          InputProps={{
            endAdornment: <IconButton sx={{ visibility: searchTerm ? "visible" : "hidden" }} onClick={onClear}><ClearSharp /></IconButton>
          }}
        />
        <Button 
          id='search-button' 
          variant='contained'
        >
          Search
        </Button>
    </div>
  )
}

export default SearchBar;