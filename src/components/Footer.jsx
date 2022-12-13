import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCrosshairs,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F2F8FC] ">
      <div className="mx-auto py-16 px-20 grid lg:grid-cols-2 gap-8">
        <section>
          <div>
            <h1 className="footer-logo w-full text-3xl font-bold">TRACE</h1>
            <p className="footer-heading py-4">
              We earned a reputation of being good at what we do. Let us take
              your online shop to new dimension in success!
            </p>
          </div>
          <div className="inline-flex gap-2">
            <FaCrosshairs size={24} />
            <p className="footer address">Comilla, Bangladesh 3500</p>
          </div>
          <div>
            <p className="footer email">kawsarahmed0210@gmail.com</p>
            <p className="footer phone-no">01647470457</p>
          </div>
          <div className="flex justify-between md:w-[40%] my-6">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </section>
        <section>
          <div className="input-areas">
            <h1 className="w-full text-3xl font-bold pb-4">RECEIVE EMAIL UPDATES</h1>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="footer-input py-3 px-5 w-4/5 rounded-lg" 
              />
              <button>Join</button>
            </form>
          </div>
          <div className="footer-wrapper lg:col-span-2 flex justify-between mt-6">
            <div>
              <h6 className="font-medium text-black-600">SHOP</h6>
              <ul>
                <li className="py-2 text-sm">Shop</li>
                <li className="py-2 text-sm">Collection</li>
                <li className="py-2 text-sm">Outlet</li>
                <li className="py-2 text-sm">Lookbook</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-black-600">HELP</h6>
              <ul>
                <li className="py-2 text-sm">FAQ</li>
                <li className="py-2 text-sm">Privacy Policy</li>
                <li className="py-2 text-sm">Terms and conditions</li>
                <li className="py-2 text-sm">Return and Exchanges</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-black-600">ABOUT</h6>
              <ul>
                <li className="py-2 text-sm">Journal</li>
                <li className="py-2 text-sm">Our Story</li>
                <li className="py-2 text-sm">Contact</li>
                <li className="py-2 text-sm">Store Location</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#E7F5F8] py-4 text-center text-xl">
        <p>Copyright © 2020 . TRACE  All rights reserved</p>
      </section>
    </div>
  );
};
export default Footer;
