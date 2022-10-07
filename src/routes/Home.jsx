import { React, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard';

function Home() {

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

  return (
    <div>
        <div className='navigation'>
            <NavBar />
            <SearchBar />
        </div>
        {car.map((car) => (
          <CarCard year={car.year} make={car.make} model={car.model} image={car.image}/>
        ))}
    </div>
  )
}

export default Home;