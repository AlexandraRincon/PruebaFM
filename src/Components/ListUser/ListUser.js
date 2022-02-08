import "./listUser.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Head from "../Head/Head"

function ListUser() {
  const [infoUser, requestUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=1",
      });
      requestUser(response.data.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateTable = () => {
    return infoUser.map((element) => (
      <tr className="tableAvatar" key={element.id}>
        <td className="tableUserAvatar">
          <img  src={element.avatar} alt="Avatars"></img>
        </td>
        <td className="tableUserAvatar" > {element.email} </td>
        <td className="tableUserAvatar"> {element.first_name} {element.last_name}</td>
        
      </tr>
    ));
  };

  return (
    <div>
      <div>
        <Head></Head>
      </div>
      <div className="tableListUser">
        <div className="tableTitle">
          <h1>Lista de Usuarios</h1>
        </div>

        <table className="tableUser">
          <thead className="tableUserTitle">
            <tr>
              <th >AVATAR</th>
              <th>Email</th>
              <th>NAME</th>
              
            </tr>
          </thead>
          <tbody >{generateTable()}</tbody>
        </table>
      </div>
    </div>
  );
}
export default ListUser;
