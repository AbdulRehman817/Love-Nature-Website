import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="pt-5 "
        style={{
          backgroundImage:
            "url(https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/header-hero-1.jpg)",
          display: "grid",
          placeItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-[90px] font-normal text-white tracking-[3] leading-6 font-sans	 ">
              about us
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
