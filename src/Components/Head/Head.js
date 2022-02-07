import "./head.css";
import monkey from "../../Images/monkey.png";
import fruit from "../../Images/fruits.png";
import download from "../../Images/download.png";
import play from "../../Images/play.svg";
import main from "../../Images/menu.svg";



function Head() {
  return (
    <div>
      <div className="background_Orange styleHeader">
        <div className="head">
          <div className="headMonkey">
            <div className="headCircle"></div>
            <img src={monkey} alt="monkey" />
          </div>
          <div className="headMenu">
            <div className="headerItems">
              <a href="#">Item 1</a>
              <a href="#">Item 2</a>
              <a href="#">Item 3</a>
            </div>
            <div className="headerLogin">
              <button className="headerLoginButtom"> Login</button>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="mainDescription">
            <div className="mainTitle">
              <h1> Title Lorem ipsum. </h1>
            </div>

            <div className="mainSubtitle">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vehicula rutrum arcu in dictum. Praesent risus turpis.
              </h3>
            </div>
          </div>

          <div className="mainImagen">
            <div className="mainCircle"></div>
            <img src={fruit} alt="fruit" />
          </div>
        </div>
      </div>
      <div className="actions">
        <a href="/ListUser" className="actionDownload">
          <img  src={download} alt="download" />{" "}
        </a>
        <div className="actionPlay">
          <img src={play} alt="play" />
        </div>
        <div className="actionMenu">
          <img src={main} alt="main" />
        </div>
      </div>
    </div>
  );
}

export default Head;
