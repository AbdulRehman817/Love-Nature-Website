import React from "react";

const Lastsection = () => {
  return (
    <div
      className="pt-5 "
      style={{
        backgroundImage:
          "url(https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/footer-hero-big.jpg)",
        display: "grid",
        placeItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "450px",
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-normal text-[#536942] text-[50px] ">
            QUESTIONS?
          </h1>
          <div className="pt-4">
            <p className="mb-5 text-[#52683F] text-[18px] font-sans">
              Whether you’re curious about features, a free trial, or <br />
              even press, we’re here to answer any questions.
            </p>
          </div>
          <div className="pt-5">
            <button className="bg-[#ffd936] text-[#536942] w-40 p-3 rounded-[4px] ">
              Let's Talk Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastsection;
