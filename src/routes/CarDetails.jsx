import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardMedia, Grid, Stack, Typography, Chip, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';

function CarDetails() {
  const navigate = useNavigate();
  const params = useParams();

  const [ car, setCar ] = useState(null);

  let badge = "";
  let color = "";

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setCar(data);
        })
        .catch((error) => {
        console.error(error);
        });
  }, [params.id]);

  if (!car) {
    return <>loading...</>;
  }

  const carList = [
    {
      id: 'drivetrain',
      label: 'DriveTrain',
      value: car.drivetrain
    },
    {
      id: 'mpg',
      label: 'Miles Per Gallon',
      value: car.mpg
    },
    {
      id: 'engine',
      label: 'Engine',
      value: car.engine
    }, {
      id: 'fuelType',
      label: 'Fuel Type',
      value: car.fuelType
    }, {
      id: 'transmission',
      label: 'Transmission',
      value: car.transmission
    }
  ];

  if(car.year >= 2010){
    badge = "New";
    color = "success";
  } else if (car.year <= 2000) {
    badge = "Classic";
    color = "error";
  } else {
    badge = "Old";
    color = "primary";
  }

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
        <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
          <Grid item xs={5} sx={{padding:'50px'}}>
            <Card>
                <CardMedia className='car-image' component="img" image={car.image} alt="Car"/>
            </Card>
            <Typography className='car-name' variant="h5" component="div" sx={{textAlign: 'center', padding: '30px', margin:'30px', fontSize:'1.8rem' }}>
              <span><Chip label={badge} color={color} /></span> <span>{car.year}</span> <span>{car.make}</span> <span>{car.model}</span>
            </Typography>
            {/* <Box style={{ display: 'flex', justifyContent:"center" }}>
              <Chip label={badge} color={color} />
            </Box> */}
          </Grid>
          <Grid className='collapsible' item xs={5}>
          {carList.map((car) => (
          <Accordion key={car.id}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Typography>{car.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span>{car.value}</span>
              </Typography>
            </AccordionDetails>
          </Accordion>))}
          </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default CarDetails;