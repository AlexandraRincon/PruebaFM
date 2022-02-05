import "./inicio.css";
import monkey from "../Images/monkey.png";
import fruit from "../Images/fruits.png";
import download from "../Images/download.png";
import play from "../Images/play.svg";
import menu from "../Images/menu.svg";

function Inicio() {
  return (
    <div>
      <div className="background_Orange styleHeader">
        <div className="head">
          <div className="headMonkey">
            <div className="headCircle"></div>
            <img src={monkey} />
          </div>
          <div className="headMenu">
            <div className="headerItems">
              <a href="" className="">
                Item 1
              </a>
              <a href="" className="">
                Item 2
              </a>
              <a href="" className="">
                Item 3
              </a>
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
            <img src={fruit} />
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="actionDownload">
          {" "}
          <img src={download} />{" "}
        </div>
        <div className="actionPlay">
          {" "}
          <img src={play} />{" "}
        </div>
        <div className="actionMenu">
          {" "}
          <img src={menu} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
