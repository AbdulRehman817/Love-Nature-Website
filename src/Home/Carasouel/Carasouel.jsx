import React from "react";

const Carousel = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2022/01/header-hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md mt-[55px]">
          <h1
            className="mb-5 text-[40px] text-white  "
            style={{
              fontFamily: "sans-serif",
            }}
          >
            We all love <br />
            <span className="font-normal	 text-9xl	 tracking-tighter-[2px] 	">
              nature
            </span>
          </h1>
          <p className="mb-5 text-white ">
            Look deep into nature, and you will <br /> understand everything
            better
          </p>
          <button className=" bg-[#ffd936] text-[#536942] w-40 p-3 rounded-[4px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
