import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, MenuItem, Select, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard';
import { getCars, selectAllCars, selectDisplayEntries, selectPageNumber, setDisplayEntries, setPageNumber } from '../features/carPageSlice';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayEntriesValue = useSelector(selectDisplayEntries);
  const displayPagenumber = useSelector(selectPageNumber);

  // const [cars, setCars] = useState([]);

  // const getData = async () => {
  //   const response = await fetch("http://localhost:3000/cars");
  //   const data = await response.json();
  //   console.log("Data: ", data);

  //   setCars(data);
  // };

	useEffect(() => {
    //getData();
    dispatch(getCars());
  }, []);

  const cars = useSelector(selectAllCars);

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
            <AccountCircle sx={{fontSize: '3rem'}} onClick={() => navigate('/admin')}/>
        </div>
        <div className='tags'>
            <span className='total-records'>Total Records Found: {cars.length}</span>
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
            {cars.map((car) => (
              <Grid item xs={4} key={car.id}>
                <CarCard id={car.id} year={car.year} make={car.make} model={car.model} image={car.image} badge={car.badge}/>
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  )
}

export default Home;