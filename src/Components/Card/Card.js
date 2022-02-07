import "./card.css";
import people from "../../Images/people.svg";
function Card({ titlePosition, rotation }) {
  return (
    <div className="card">
      <div className={"cardBorder " + (rotation ? "rotate180-title" : "")}>
        {titlePosition === "top" ? (
          <div className="cardInfo cardInfoT">
            <div
              className={"cardInfoWith " + (rotation ? "rotate180-title" : "")}
            >
              <div className="cardInfoName"> Karen -New york </div>
              <img className="cardInfoImg" src={people} alt={""} />
            </div>
          </div>
        ) : null}

        <div className={"cardMessage " + (rotation ? "rotate180-message" : "")}>
          <p>Lorem ipsum dolor</p>
          <p>sit amet, consectetur</p>
          <p>adipiscing elit. Maecenas</p>
        </div>
        
        {titlePosition === "bottom" ? (
          <div className="cardInfo cardInfoB">
            <div
              className={"cardInfoWith " + (rotation ? "rotate180-title" : "")}
            >
              <div className="cardInfoName"> Karen -New york </div>
              <img className="cardInfoImg" src={people} alt={""} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Card;
