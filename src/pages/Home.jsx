import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories';
import Navbar from '../components/Navbar'
import Slider from './../components/Slider';

const Home = () => {
  return (
   <>
    <Announce />
    <Navbar />
    <Slider />
    <Categories />
   </>
  )
}

export default Home