import "./card.css";
import people from "../../Images/people.svg";
function Card() {
  return (
    <div className="card">
      <div className="cardBorder">
        <div className="cardInfo">
          <div className="cardInfoWith">
            <div className="cardInfoName"> Karen -New york </div>
            <img className="cardInfoImg" src={people} />
          </div>
        </div>
        <div className="cardMessage">
          <p>Lorem ipsum dolor</p>
          <p>sit amet, consectetur</p>
          <p>adipiscing elit. Maecenas</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
