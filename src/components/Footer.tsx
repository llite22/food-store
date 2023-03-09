import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="description1">
          <h1>Solutions</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="description2">
          <h1>Support</h1>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div className="description3">
          <h1>Company</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="description4">
          <h1>Legal</h1>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="description5">
          <h1>Subscribe to our newsletter</h1>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr className="line" />
      <div className="footer__bottom">
        <p>© 2020 Dlex, Inc. All rights reserved</p>

        <div className="footer__bottom__icons">
          <FaFacebook className="icons icon__color"/>
          <FaInstagram className="icons icon__color"/>
          <FaTwitter className="icons icon__color"/>
          <FaGithub className="icons icon__color"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
