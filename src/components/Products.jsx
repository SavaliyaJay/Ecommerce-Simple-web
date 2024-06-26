// import React from 'react';
// import { ApiTopPropduct } from './../apifolder/ApiTopPropduct';
// import Product from './Product';

// const Products = () => {
//   return (
//     <>
//       <div className="flex flex-wrap p-5 items-center justify-center">
//         {ApiTopPropduct.map((product, index) => (
//           <Product item={product} key={index} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Products;


import React from 'react';
import { ApiTopPropduct } from './../apifolder/ApiTopPropduct';
import Product from './Product';

const Products = () => {
  const data = ApiTopPropduct;

  console.log(data);
  return (
    <>
      <div className="flex flex-wrap p-5 items-center justify-center">
        {data.map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
