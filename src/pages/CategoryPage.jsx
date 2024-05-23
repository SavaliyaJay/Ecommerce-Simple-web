import React from 'react';
import Announce from '../components/Announce';
// import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
// import Slider from './../components/Slider';
import NewsLetter from './../components/NewsLetter';
import Footer from '../components/Footer';

const CategoryPage = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men  `&apos;` s</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver mobile:ml-0">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
            <select className="ml-3 border-2 border-silver mobile:ml-0">
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
              <option>Green</option>
            </select>
          </div>
          <div className="flex mobile:flex-col mobile:items-end">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-silver">
              <option selected>Newest (first)</option>
              <option>Oldest (first)</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default CategoryPage;
