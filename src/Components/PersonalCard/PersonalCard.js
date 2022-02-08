import "./personalCard.css";
import emailImage from "../../Images/email.png";
import close from "../../Images/close.png";

function PersonalCard({ user }) {
  return (
    <div className="personalCardOrigin">
      <div className="headerCard">
        <div className="titleCard">
          <img className="close" src={close} alt="" />
          <img src={user.avatar} className="personalCardImage" alt="" />
        </div>
      </div>
      <div className="infoCard">
        <h5>{user.first_name + " " + user.last_name}</h5>
        <div className="infoDescriptionCard">
          <div>
            <img src={emailImage} alt="" />
            {user.email}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalCard;
