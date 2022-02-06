import "./content2.css";
import download2 from "../../Images/download.png";
import celphone2 from "../../Images/celphoneMenu.svg";
import bell from "../../Images/bell.svg";
import salad from "../../Images/salad.svg";
import calories from "../../Images/calories.svg";
import food from "../../Images/food.svg";
import recipes from "../../Images/recipes.svg";
import mainOrange from "../../Images/mainorange.svg"
function Content2() {
  return (
    <div className="content2">

      <div className="content2Below">
        <div className="content2Download2">
          <img src={download2} alt="download2" />
        </div>
        <div className="content2MainOrange">
        <img src={mainOrange} alt="mainOrange" />
      </div>
      </div>



      <div className="content2Img">

        <div className="content2ImgCircle"></div>
        <div className="content2ImgCelphone">
          <img src={celphone2} alt="celphone2" />
          <div className="content2ImgBell">
            <img src={bell} alt="bell" />
          </div>
          <div className="content2ImgSalad">
            <img src={salad} alt="salad" />
          </div>
          <div className="content2ImgRecipes">
            <img src={recipes} alt="recipes" />
          </div>
          <div className="content2ImgFood">
            <img src={food} alt="food" />
          </div>
          <div className="content2ImgCalories">
            <img src={calories} alt="calories" />
          </div>
        </div>
        
      </div>
      <div className="content2Content">
        <div className="content2Description">
          <div className="content2Title"> Lorem ipsum.</div>
          <div className="content2Parragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vehicula rutrum arcu in dictum. Praesent risus turpis.
            </p>
          </div>
          <div className="content2Download">
            <img src={download2} alt="download2" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Content2;
