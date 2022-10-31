import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, MenuItem, Select, Grid, Pagination } from '@mui/material';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard';
import { getCars, selectDisplayEntries, selectFilteredCars, selectPageNumber, setDisplayEntries, setPageNumber } from '../features/carPageSlice';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Pages from '../components/Pages';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const limit = useSelector(selectDisplayEntries);
  const page = useSelector(selectPageNumber);
  const cars = useSelector(selectFilteredCars);

  const handleEntriesChange = (e) => {
    dispatch(setDisplayEntries(e.target.value));
    dispatch(setPageNumber(1));
    dispatch(getCars({page, limit}));
  };

  const count = Number.parseInt((cars.length / limit) + 1);

  const handlePageChange = (event, value) => {
    dispatch(setPageNumber(value));
  };

  useEffect(() => {
    dispatch(getCars({page, limit}));
    console.log('happening')
  }, [limit, page]);

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
                        defaultValue={limit}
                        value={limit}
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
                <CarCard id={car.id} year={car.year} make={car.make} model={car.model} image={car.image}/>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className='pagination' >
          <Pagination 
              count={count}
              color='primary'
              variant="outlined"
              shape="rounded"
              size="large"
              onChange={handlePageChange}
              page={page}
          />
          {/* <Pages /> */}
        </div>
    </div>
  )
}

export default Home;