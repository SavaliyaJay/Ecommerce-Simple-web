import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Sliderbar from "../apifolder/Sliderbar";
import './Slider.css';

const Slider = () => {
  var length = Sliderbar.length;
  console.log(length);

  const [slides] = useState(Sliderbar);
  const [activeSlide, setactiveSlide] = useState(0);

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setactiveSlide(0);
    } else {
      setactiveSlide(activeSlide + 1);
    }
  };
  const preSlide = () => {
    if (activeSlide === 0) {
      setactiveSlide(slides.length - 1);
    } else {
      setactiveSlide(activeSlide - 1);
    }
  };
  return (
    <>
      <div className="parentDiv h-[540px] bg-white flex  items-center justify-between">
        <div className={arrowStyle}>
          <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={preSlide} />
        </div>
        {
          // eslint-disable-next-line
          slides.map((slide, index) => {
            if (index === activeSlide) {
              return (
                <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0]  overflow-hidden relative bg-[#ffd028]">
                  <div className="slide flex items-center justify-center h-[100%]">
                    <div className="forImage flex flex-1 items-center h-[100%]">
                      <img
                        className="h-[100%] object-cover"
                        src={slide.src}
                        alt="Not Found Img"
                      />
                    </div>
                    <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                      <h2 className="text-[55px]">{slide.content.h2}</h2>
                      <p className="text-[30px]">{slide.content.p}</p>
                      <button className="btn">Shop Now</button>
                    </div>
                  </div>
                </div>
              );
            }
          })
        }
        <div className={arrowStyle}>
          <ArrowRightOutlined
            style={{ fontSize: "50px" }}
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
