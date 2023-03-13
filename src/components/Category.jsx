import React from 'react'

const Category = (item) => {
  return (
    <>
      <div>

        <img src={item.src} alt="category_image" srcset="" />
        <div>
          <h2>{item.title}</h2>
        </div>
        <button>See More</button>
      </div>
    </>
  )
}

export default Category