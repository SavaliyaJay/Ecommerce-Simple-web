import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ item }) => {
  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
      <img src={item.src} className="w-[100%]" alt="category_img" />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-[30px]">{item.title}</h2>
        <button className="btn">See more</button>
      </div>
    </div>
  );
};

Category.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Category;
