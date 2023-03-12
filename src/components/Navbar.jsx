import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";

const Navbar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px]";
  return (
    <>
      <div className="navbar h-[60px] shadow-md relative z-10">
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
          {/* left */}
          <div className="left flex flex-1 items-center">
            <div className="language cursor-pointer text-[16px]">En</div>
            <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#1c0b9a] transition-all">
              <input
                type="text "
                className="input outline-none"
                placeholder=""
              />
              <Search className="" style={{ fontSize: "16px" }} />
            </div>
          </div>

          {/* logo */}
          <div className="center flex-1 text-center ">
            <div className="logo font-bold text-lg">Jay Savaliya</div>
          </div>

          {/* left */}
          <div className="right flex flex-1 items-center justify-end">
            <div className={style}>Register</div>
            <div className={style}>Sign in</div>
            <div className={style}>
              <Badge badgeContent={2} color="primary">
                <ShoppingBasketOutlined />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
