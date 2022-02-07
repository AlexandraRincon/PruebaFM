import "./footer.css";
import foonkieMonkey from "../../Images/foonkieMonkeyLogo.svg";
import arrow from "../../Images/arrow.svg"

function Footer() {
  return (
    <div className="footer">
      <div className="footerData">
        <div className="dataPrincipal ">
          <img src={foonkieMonkey} alt="LogoMonkey" />
          <p> +0 (0000) 000 00-00 </p>
          <p> support@sniff.com </p>
        </div>

        <div className="dataLinks">
          <p> Quick Links </p>
          <div className="dataLinksBase">
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
            <input  type="text" placeholder="Get product updates" />
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footerSocial">
        <div className="socialLogo">1111111</div>
        <div className="socialPowered">2222222222</div>
        <div className="socialReserves">33333333</div>
      </div>
    </div>
  );
}

export default Footer;
