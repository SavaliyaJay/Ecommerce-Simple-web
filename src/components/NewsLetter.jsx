import React from 'react';
import { Send } from '@material-ui/icons';
const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#3c33ea] text-white">
      <h1 className="text-[50px] font-bold">Jay Savaliya</h1>
      <h2 className="text-[20px] mt-2 mobile:text-center mobile:p-3">
        Always in touch with us, for your favourite Products.
      </h2>
      <div className="flex mt-[3rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        <input
          className="border-none pl-[20px] flex-[8] text-black"
          type="email"
          placeholder="Email"
        />
        <button className="bg-[#10078c] flex-1">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
