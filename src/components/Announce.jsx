import { Close } from "@material-ui/icons";
import React, { useState } from "react";

const Announce = () => {
  const [announceStyle, setannounceStyle] = useState(
    "bg-[#1c0b9a] font-bold text-white flex items-center justify-center"
  );
  const handleClose = () => {
    setannounceStyle(announceStyle + " hidden");
  };
  return (
    <>
      <div className={announceStyle}>
        <h2 className="mr-5">Hurry Up it's 40% off now</h2>
        <Close className="cursor-pointer" onClick={handleClose} />
      </div>
    </>
  );
};

export default Announce;
