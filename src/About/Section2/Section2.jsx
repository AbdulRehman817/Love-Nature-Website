import React from "react";
import "./section2.css";
const Section2 = () => {
  return (
    <>
      <div className="bg-white ">
        <div>
          <p className="text-[#536942] text-center text-3xl pt-20 pb-20 font-sans font-normal">
            Inspired by nature's harmony, we nurture every project with care.{" "}
            <br />
            Our team works collaboratively to deliver results. We reflect the{" "}
            <br />
            beauty and balance of the natural world.
          </p>
          <div className="h-[90%] w-[80% ] align-middle ml-28">
            <img
              src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero.jpg"
              alt=""
            />
          </div>

          <div className="mission-values-container pb-16 ">
            <div className="mission-values-section">
              <h2 className=" pb-7 ">Our Mission</h2>
              <p className="">
                Build the best product that creates the most value for our{" "}
                <br /> customers, use business to inspire and implement
                environmentally <br /> friendly solutions.
              </p>
            </div>
            <div className="mission-values-section">
              <h2 className=" pb-7 ">Our Values</h2>
              <p className="">
                We strive to go above and beyond for our clients no matter the{" "}
                <br />
                challenge. We aim to deliver our very best work every single day{" "}
                <br /> across our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
