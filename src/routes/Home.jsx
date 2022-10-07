import React from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div>
        <div className='navigation'>
            <NavBar />
            <SearchBar />
        </div>
    </div>
  )
}

export default Home;