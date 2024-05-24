import React, { useState } from "react";
import close from "../img/icon.svg";
import union from "../img/Union.svg";
import email from "../img/email.svg";

const UserDetailsBlock = (user, key) => {

  const [selectedUser, setSelectedUser] = useState(null);

  const showUser = (user) => {
    setSelectedUser(user);
  };

  const hideUser = () => {
    setSelectedUser(null);
  }

  return (
    <div className="user">
      <div className="card" onClick={() => showUser(user)}>
        <p className="cardtitle">{user.user.name}</p>
        <div>
          <img src={union} alt="phone" />
          <p>{user.user.phone}</p>
        </div>
        <div>
          <img src={email} alt="email" />
          <p>{user.user.email}</p>
        </div>
      </div>
      {selectedUser && (
        <div>
        <div className="overlay" onClick={hideUser}>
      </div>
      <div className="detail">
            <div className="detail_title">
              <p>{user.user.name}</p>
              <img src={close} alt="close" className="close" onClick={hideUser}></img>
            </div>
            <div className="details">
              <div className="detail-nubmer">
                <p>Телефон:</p>
                <p>{user.user.phone}</p>
              </div>
              <div className="detail-email">
                <p>Почта:</p>
                <p>{user.user.email}</p>
              </div>
              <div className="detail-hire">
                <p>Дата приема:</p>
                <p>{user.user.hire_date}</p>
              </div>
              <div className="detail-pos">
                <p>Должность:</p>
                <p>{user.user.position_name}</p>
              </div>
              <div className="detail-department">
                <p>Подразделение:</p>
                <p>{user.user.department}</p>
              </div>
            </div>
            <div>
              <h1 className="about">
                Дополнительная информация:
              </h1>
              <h2 className="abouttext">
                Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
              </h2>
            </div>
          </div>
      </div>
      )}
    </div>
  );
};

export default UserDetailsBlock;