import { Button, Stack } from '@mui/material';
import React from 'react'
import NavBar from '../components/NavBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CarDetails() {
  return (
    <div>
      <div className='navigation'>
        <NavBar />
      </div>
      <div className='back-to-all'>
        <Stack direction='row' spacing={2}>
          <Button
            href='/'
            startIcon={<ArrowBackIcon/>}
            variant="outlined"
            size='large'
          >
            Back to All Vehicles
          </Button>
        </Stack>
      </div>
    </div>
  )
}

export default CarDetails;