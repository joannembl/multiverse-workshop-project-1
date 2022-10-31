import React, { useState } from 'react';
import { TextField, Button, InputLabel, FormControl, MenuItem, Select } from "@mui/material/";
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [drivetrain, setDrivetrain] = useState('');
  const [mpg, setMpg] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [engine, setEngine] = useState('');
  const [badge, setBadge] = useState('')

  const createCar = async (newCar) => {
    try{
      const response = await fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar)
    });

    const data = await response.json();

    console.log('Car created', data);

    } catch(error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCar = {
      category,
      make,
      model,
      year,
      color,
      image,
      drivetrain,
      mpg,
      fuelType,
      transmission,
      engine,
      badge,
    }

    createCar(newCar);

    setCategory('');
    setMake('');
    setModel('');
    setYear('');
    setColor('');
    setImage('');
    setDrivetrain('');
    setMpg('');
    setFuelType('');
    setTransmission('');
    setEngine('');
    setBadge('');
  };

  return (
    <div className='form'>
      <h1>Create Car Card:</h1>
      <form onSubmit={handleSubmit} >
        <div className='category-input'>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="type-select-label">Category</InputLabel>
            <Select
              labelId="type"
              id="type-select"
              label="Type"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
            <MenuItem value={'SUV'}>SUV</MenuItem>
            <MenuItem value={'Sedan'}>Sedan</MenuItem>
            <MenuItem value={'Truck'}>Truck</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='text-field-input'>
          <TextField label="Make" value={make} onChange={(event) => setMake(event.target.value)}/>
          <TextField label="Model" value={model} onChange={(event) => setModel(event.target.value)}/>
          <TextField label="Year" value={year} onChange={(event) => setYear(event.target.value)}/>
          <TextField label="Color" value={color} onChange={(event) => setColor(event.target.value)}/>
          <TextField label="Image URL" value={image} onChange={(event) => setImage(event.target.value)}/>
          <TextField label="Drivetrain" value={drivetrain} onChange={(event) => setDrivetrain(event.target.value)}/>
          <TextField label="MPG" value={mpg} onChange={(event) => setMpg(event.target.value)} />
          <TextField label="Fuel-Type" value={fuelType} onChange={(event) => setFuelType(event.target.value)}/>
          <TextField label="Transmission" value={transmission} onChange={(event) => setTransmission(event.target.value)}/>
          <TextField label="Engine" value={engine} onChange={(event) => setEngine(event.target.value)}/>
        </div>
        <div className='badge-input'>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id='badge-select-label'>Badge</InputLabel>
            <Select
              labelId='badge'
              id='badge-select'
              label='Badge'
              value={badge}
              onChange={(event) => setBadge(event.target.value)}
            >
            <MenuItem value={'New'}>New</MenuItem>
            <MenuItem value={'Old'}>Old</MenuItem>
            <MenuItem value={'Classic'}>Classic</MenuItem>
            </Select>
          <Button variant="contained" type='submit'>Submit</Button>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
          </FormControl>
        </div>
      </form>
    </div>
  )
}

export default Admin;