import "./listUser.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import PersonalCard from "../PersonalCard/PersonalCard";

function ListUser() {
  const [requestUser, setRequestUser] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=1",
      });
      setRequestUser(response.data.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateTable = () => {
    return requestUser.map((element) => (
      <tr
        className="tableAvatar"
        key={element.id}
        onClick={() => generateCard(element)}
      >
        <td className="tableUserAvatar">
          <img src={element.avatar} alt="Avatars"></img>
        </td>
        <td className="tableUserAvatar"> {element.email} </td>
        <td className="tableUserAvatar">
          {" "}
          {element.first_name} {element.last_name}
        </td>
      </tr>
    ));
  };

  const generateCard = (user) => {
    setUserSelected(user);
  };

  const closeCard = () => {
    setUserSelected(null);
  };

  return (
    <div>
      <div className="background_Orange h100">
        <Menu></Menu>
      </div>
      <div className="tableListUser">
        <div className="tableTitle">
          <h1>Lista de Usuarios</h1>
        </div>

        <table className="tableUser">
          <thead className="tableUserTitle">
            <tr>
              <th>AVATAR</th>
              <th>Email</th>
              <th>NAME</th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      </div>
      <div className="listFooter background_Orange">
        <Footer></Footer>
      </div>
      {userSelected !== null ? (
        <div className="backgroundCard">
          <PersonalCard user={userSelected} closeCard={closeCard}></PersonalCard>
        </div>
      ) : null}
    </div>
  );
}
export default ListUser;
