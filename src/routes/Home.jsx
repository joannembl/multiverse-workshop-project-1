import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

function Home() {
  const [entries, setEntries] = useState(20);

  const handleEntriesChange = (e) => {
    setEntries(e.target.value);
  }

  return (
    <div>
        <div className='navigation'>
            <NavBar />
            <SearchBar />
        </div>
        <div className='tags'>
            <span className='total-records'>Total Records Found: 0</span>
            <div className='display-entries'>
                <span>Display: </span>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <Select
                        value={entries}
                        onChange={handleEntriesChange}
                    >
                        <MenuItem value={5}>5 entries</MenuItem>
                        <MenuItem value={10}>10 entries</MenuItem>
                        <MenuItem value={20}>20 entries</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    </div>
  )
}

export default Home;