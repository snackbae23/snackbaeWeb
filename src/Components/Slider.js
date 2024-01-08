import React, { useEffect, useState } from "react";
import rectbig from "../assets/rect1.png";
import rect3 from "../assets/rect3.png";
const Slider = () => {
  

  useEffect(() => {
    const handleNextClick = () => {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(lists[0]);
    };

    const handlePrevClick = () => {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    };

    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNextClick);
      prevButton.addEventListener("click", handlePrevClick);
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNextClick);
        prevButton.removeEventListener("click", handlePrevClick);
      }
    };
  }, []);

  return (
    <div className=" flex mx-auto items-center  justify-evenly container1 w-[98.9vw] transform translate-x-[0.002%] translate-y-[-40%] h-[90vh] mt-32 -mb-24 ">
      <div id="slide">
        {/* Your item components go here */}
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rect3})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">EXPLORE</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rect3})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button id="prev">prev</button>
        <button id="next">next</button>
      </div>
    </div>


  );
};

export default Slider;
