import React from "react";

const Section = () => {
  return (
    <>
      <div className="bg-[#f6f8f5] pt-10 pb-20 flex flex-col justify-center align-middle">
        <div className="pt-10 w-[37px] opacity-[0.3] relative left-[650px] pb-5">
          <img
            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/quotes.svg"
            alt=""
          />
        </div>
        <div className="text-center text-[30px] text-[#536942] font-normal font-thin">
          <p>
            “Original and with an innate understanding <br /> of their
            customer’s needs, the team at Love <br /> Nature are always a
            pleasure to work with.”
          </p>
        </div>

        <div className="avatar pt-10 ">
          <div className="w-14 rounded-full relative left-[650px]">
            <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_on_home.png" />
          </div>
          <div className="">
            <p className="absolute top-[105px] left-[645px] text-[#536942] text-center ">
              Jane Miller
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
