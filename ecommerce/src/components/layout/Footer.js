import React from "react";
import "./Footer.css";
import { AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { SlSocialSpotify } from "react-icons/sl";
function Footer() {
  return (
    <div className="footer">
      <div className="brand-name">
        <h1>Best4U</h1>
      </div>
      <div className="icons">
        <span className="yt">
          <AiOutlineYoutube fontSize={"40px"}></AiOutlineYoutube>
        </span>
        <span className="fb">
          <AiOutlineFacebook fontSize={"40px"}></AiOutlineFacebook>
        </span>
        <span className="spotify">
          <SlSocialSpotify fontSize={"40px"}></SlSocialSpotify>
        </span>
      </div>
    </div>
  );
}

export default Footer;
