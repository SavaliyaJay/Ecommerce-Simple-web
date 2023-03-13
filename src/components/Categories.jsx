import React from "react";
import { Apicategory } from "../apifolder/Apicategory";
import Category from "./Category";

const Categories = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        {/* {
                console.log(Apicategory)
            } */}
        {
          // eslint-disable-next-lin
          Apicategory.map((category, index) => (
            <Category item={category} key={index} />
          ))
        }
      </div>
    </>
  );
};

export default Categories;
