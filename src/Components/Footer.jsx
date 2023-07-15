import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggler";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>API Status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Invest</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <ThemeToggle />
              </div>
              <p>Sign up for crypto news</p>
              <div>
                <form>
                  <input type="email" placeholder="Enter you email" />
                  <button>Sign Up</button>
                </form>
              </div>
              <div>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>2
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
