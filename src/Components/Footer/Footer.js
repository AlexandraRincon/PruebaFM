import "./footer.css";
import foonkieMonkey from "../../Images/foonkieMonkeyLogo.svg";
import arrow from "../../Images/arrow.svg";
import linkedin from "../../Images/linkedin.svg";
import facebook from "../../Images/facebook.svg";
import twitter from "../../Images/twitter.svg";
import React, { useState } from "react";

function Footer() {
  
  
  const goToPage = (option) => {
    console.log(typeof option)
    let windowObjectReference; 
    switch (option){
      case '1': windowObjectReference = window.open(
        "https://www.foonkiemonkey.co.uk/portfolio/");
        break;

      case '2': windowObjectReference = window.open(
        "https://www.britannica.com/animal/monkey");
        break; 

      case '3': windowObjectReference = window.open(
        "https://en.wikipedia.org/wiki/Information");
        break;

      case '4': windowObjectReference = window.open(
        "https://www.foonkiemonkey.co.uk/");
        break;

      default: break;
    }  
        
  }
    
  

  const handleChange = (selectedOption) => {
    const optionSelect = selectedOption.target.value;
    goToPage(optionSelect);
  };

  return (
    <div className="footer flexDirec-Colum ">
      <div className="footerData flexSpaceB">
        <div className="dataPrincipal flexDirec-Colum ">
          <img src={foonkieMonkey} alt="LogoMonkey" />
          <p> +0 (0000) 000 00-00 </p>
          <p> support@sniff.com </p>
        </div>

        <div className="dataLinks flexDirec-Colum">
          <p> Quick Links </p>
          <div className="dataLinksBase flexDirec-Colum ">
            <div className="linksDataBase">
              <a>Product</a>
              <a>Company</a>
            </div>
            <div className="linksDataBase">
              <a>Information</a>
              <a>Foonkie monkey</a>
            </div>
          </div>
        </div>

        <div className="dataSubscribe">
          <p>Subscribe</p>
          <div className="inputSubscribe">
            <input type="text" placeholder="Get product updates" />
            <div className="arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="quickLinks">
            <select
              onChange={handleChange}
              className="footerSelect displayNone"
              name="footerSelect"
            >
              <option value="0">Quick Links</option>
              <option value="1">Product</option>
              <option value="2"> Company 2</option>
              <option value="3">Information</option>
              <option value="4">foonkie monkey</option>
            </select>
          </div>
        </div>
      </div>

      <div className="footerSocial flexSpaceB">
        <div className="footerContent flexSpaceB">
          <div className="socialLogo">
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="socialPowered fontEpilogue500">
            <p>Powered by</p>
            <img src={foonkieMonkey} alt="logoMonkey" />
          </div>
        </div>

        <div className="socialReserves fontEpilogue500">
          <p>© 2021 FM. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
