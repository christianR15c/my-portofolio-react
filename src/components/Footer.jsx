import React from 'react';

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div name="footer" className="w-full bg-slate-900 text-gray-300 py-2 mt-20">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2 border-b-2 border-x-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 pl-5">solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">e-commerce</li>
            <li className="py-1">cloud</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-5">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Career</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-5">Support</h6>
          <ul>
            <li className="py-1">Software development </li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">APIs</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-5">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 px-3">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to you.
          </p>
          <form className="flex flex-col sm:flex-row" action="submit">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email ... "
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row px-4 max-w-[1240px] m-auto justify-between text-center text-gray-500 py-6">
        <p>2022 workflow, LLC, All right reserved</p>
        <div className="flex justify-between sm:w-[300px] text-2xl pt-4 sm:pt-0">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
