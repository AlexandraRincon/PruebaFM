import "./menu.css";
import monkey from "../../Images/monkey.png";
function Menu() {
  return (
    <div className="head">
      <div className="headMonkey">
        <a href="/" className="headCircle"></a>

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
  );
}
export default Menu;
