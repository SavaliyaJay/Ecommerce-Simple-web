import React from 'react';
import Announce from '../components/Announce';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from './../components/Slider';
import NewsLetter from './../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Slider />
      <div className="flex justify-center items-center text-[30px] font-bold mt-10">
        Category
      </div>
      <Categories />
      <div className="flex justify-center items-center text-[20px] font-bold mt-5">
        Top Most Product
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
