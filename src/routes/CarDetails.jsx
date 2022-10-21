import { Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';

function CarDetails() {
  const navigate = useNavigate();
  const params = useParams();

  const [ car, setCar ] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
            setCar(data);
        })
        .catch((error) => {
        console.error(error);
        });
  }, []);

  console.log(car);

  return (
    <div>
      <div className='navigation'>
        <NavBar />
      </div>
      <div className='back-to-all'>
        <Stack direction='row' spacing={2}>
          <Button
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIcon/>}
            variant="outlined"
            size='large'
          >
            Back to All Vehicles
          </Button>
        </Stack>
        <>
        </>
      </div>
    </div>
  )
}

export default CarDetails;