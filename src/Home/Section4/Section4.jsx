import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="bg-white flex justify-between">
        <div className="pt-24">
          <div className="text-[#536941b3] pl-24 text-[12px]">
            <p>ABOUT US</p>
          </div>
          <div className="text-[#536942] text-3xl pl-24 pt-3 font-extralight font-serif">
            <h4>
              Tell website visitors who you <br /> are and why they should{" "}
              <br /> choose your business.
            </h4>
          </div>
          <div className=" pl-24 pt-7 text-[#536941cc]">
            <p>
              Because when a visitor first lands on your website, <br /> you’re
              a stranger to them. They have to get to know <br /> you in order
              to want to read your blog posts, subscribe <br /> to your email
              newsletter, or buy what you’re selling.
            </p>
          </div>
          <div className=" pl-[92px] pt-10">
            <button className="  text-[black] border-black border-[1px] font-light px-10 py-3 rounded hover:border-[#98d16d] hover:text-[#98d16d] transition duration-300">
              Find Out More
            </button>
          </div>
        </div>
        <div className="pt-16 pb-40 pr-24">
          <img
            className="w-[400px] h-[500px] rounded-sm"
            src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Section4;
