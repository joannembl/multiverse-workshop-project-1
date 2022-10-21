import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, MenuItem, Select, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard';
import { selectDisplayEntries, selectPageNumber, setDisplayEntries, setPageNumber } from '../features/carPageSlice';

function Home() {
  const dispatch = useDispatch();
  const displayEntriesValue = useSelector(selectDisplayEntries);
  const displayPagenumber = useSelector(selectPageNumber);

  const [car, setCar] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/cars");
    const data = await response.json();
    console.log("Data: ", data);

    setCar(data);
  };

	useEffect(() => {
    getData();
  }, []);

  const handleEntriesChange = (e) => {
    dispatch(setDisplayEntries(e.target.value));
  }

  const handlePageChange = (e) => {
    dispatch(setPageNumber(e.target.value));
  }

  return (
    <div>
        <div className='navigation'>
            <NavBar />
            <SearchBar />
        </div>
        <div className='tags'>
            <span className='total-records'>Total Records Found: {car.length}</span>
            <div className='display-entries'>
                <span>Display: </span>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <Select
                        defaultValue={displayEntriesValue}
                        value={displayEntriesValue}
                        onChange={handleEntriesChange}
                    >
                        <MenuItem value={5}>5 entries</MenuItem>
                        <MenuItem value={10}>10 entries</MenuItem>
                        <MenuItem value={20}>20 entries</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <div> 
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {car.map((car) => (
              <Grid item xs={4} key={car.id}>
                <CarCard year={car.year} make={car.make} model={car.model} image={car.image}/>
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  )
}

export default Home;