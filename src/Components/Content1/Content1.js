import "./content1.css";
import Card from "../Card/Card";
import mainOrange from "../../Images/mainorange.svg";

function Content1() {
  const scale = {
    width: "22%",
  };

  return (
    <div className="content1">
      <div className="contentTop widthHeight45">
        <div className="width50">
          <div className="contentTopLeft relativeCard">
            <Card titlePosition="top" rotation={false}></Card>
          </div>
        </div>
        <div className=" displayNone width50 ">
          <div className="contentTopRigh relativeCard" style={scale}>
            <Card titlePosition="top" rotation={true}></Card>
          </div>
        </div>
      </div>
      <div className="contentBottom widthHeight45">
        <div className=" displayNone width50">
          <div className="contentBottomLeft relativeCard" style={scale}>
            <Card titlePosition="bottom" rotation={false}></Card>
          </div>
        </div>
        <div className=" width50">
          <div className="contentBottomRight relativeCard">
            <Card titlePosition="bottom" rotation={true}></Card>
          </div>
        </div>
      </div>
      <div className="mainOrange">
        <img src={mainOrange} alt="mainOrange" />
      </div>
    </div>
  );
}
export default Content1;
