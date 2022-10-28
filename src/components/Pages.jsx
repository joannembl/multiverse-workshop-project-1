import { Pagination } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCars, selectDisplayEntries, selectFilteredCars, selectPageNumber, setPageNumber } from '../features/carPageSlice';

function Pages() {
    const dispatch = useDispatch();
    const page = useSelector(selectPageNumber);
    const cars = useSelector(selectFilteredCars);
    const limit = useSelector(selectDisplayEntries);
    const count = Number.parseInt((cars.length / limit) + 1);
    const x = {page, limit};

    //console.log(x)

    const handlePageChange = (event, value) => {
        dispatch(getCars({page, limit}))
        dispatch(setPageNumber(value));
    };

  return (
    <div>   
        <Pagination 
            count={count}
            color='primary'
            variant="outlined"
            shape="rounded"
            size="large"
            onChange={handlePageChange}
            page={page}
        />
    </div>
  )
}

export default Pages;