import "./content2.css";
import download2 from "../../Images/download.png";
import celphone2 from "../../Images/celphoneMenu.svg";
import bell from "../../Images/bell.svg"
function Content2() {
  return (
    <div>
      <div className="content2">
        <div className="content2Img">
          <div className="content2ImgCircle"></div>
          <div className="content2ImgCelphone">
            <img  src={celphone2} alt="celphone2" />
            <div className="content2ImgBell"><img  src={bell} alt="bell" /></div>
          </div>
          
        </div>
        <div className="content2Content">
          <div className="content2Description">
            <div className="content2Title"> Lorem ipsum.</div>
            <div className="content2Parragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vehicula rutrum arcu in dictum. Praesent risus turpis.
              </p>
            </div>
            <div className="content2Download">
              <img src={download2} alt="download2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content2;
