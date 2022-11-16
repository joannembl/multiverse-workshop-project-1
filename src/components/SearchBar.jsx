import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, IconButton } from '@mui/material';
import { ClearSharp } from '@mui/icons-material';
import { clearSearchTerm, setSearchTerm, selectSearchTerm, setPageNumber, setDisplayEntries, selectAllCars } from '../features/carPageSlice';

function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  
  const handleInput = (e) => {
    dispatch(setPageNumber(1));
    dispatch(setDisplayEntries(20));
    dispatch(setSearchTerm(e.target.value));
  };

  const onClear = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className='search'>
        <TextField 
          fullWidth id='search-bar' 
          label='Search by Make' 
          variant='outlined'
          onChange={handleInput}
          value={searchTerm}
          InputProps={{
            endAdornment: <IconButton sx={{ visibility: searchTerm ? "visible" : "hidden" }} onClick={onClear}><ClearSharp /></IconButton>
          }}
        />
    </div>
  )
}

export default SearchBar;