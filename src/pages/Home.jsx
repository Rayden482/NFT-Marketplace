import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider'
import Catagories from './../components/Catagories';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Catagories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
