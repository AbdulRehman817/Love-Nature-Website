// import React from "react";

// const Section2 = () => {
//   return (
//     <>
//       <div className="bg-white flex">
//         <div>
//           <div>
//             <h2>You can find us at</h2>
//           </div>
//           <div>
//             <h3>Email</h3>
//             <p>hello@tyler.com</p>
//           </div>
//           <div>
//             <h3>PHONE NUMBER</h3>
//             <p>202-555-0188</p>
//           </div>
//           <div>
//             <h3>LOCATION</h3>
//             <p>2360 Hood Avenue, San Diego, CA, 92123</p>
//           </div>
//         </div>
//         <div>
//           <h2>Let's get in touch</h2>
//           <div>
//             <input type="text" placeholder="Your Name" />
//             <input type="email" placeholder="Your Email" />
//             <input type="text" placeholder="Message" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section2;

import React from "react";
import "./Section2.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="pt-20  bg-white">
      <div className="contact-container ">
        {/* Left Section */}
        <div className="contact-details pb-20">
          <h2 className="text-[40px]">You can find us at</h2>
          <p>
            <strong>EMAIL</strong>
            hello@tyler.com
          </p>
          <p>
            <strong>PHONE NUMBER</strong>
            202-555-0188
          </p>
          <p>
            <strong>LOCATION</strong>
            2360 Hood Avenue, San Diego, CA, 92123
          </p>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon text-gray-600 hover:text-gray-900 transition"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon text-gray-600 hover:text-gray-900 transition"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon text-gray-600 hover:text-gray-900 transition"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <h2 className="text-[40px]">Let's get in touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section2;
