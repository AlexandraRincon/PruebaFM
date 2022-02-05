import "./content1.css";
import Card from "../Card/Card";

function Content1() {
  return (
    <div className="content">
      <div className="contentTop widthHeight50">
        <div className="contentTopLeft width50">
          <Card></Card>
        </div>
        <div  className="contentTopRigh width50 ">
          <Card ></Card>
        </div>
      </div>
      <div className="contentBottom widthHeight50">
        <div className="contentBottomLeft width50">
          <Card></Card>
        </div>
        <div className="contentBottomRight width50">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
export default Content1;
