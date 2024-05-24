import React from "react";
import UserDetailsBlock from "./userDetailsBlock";

const UserList = ({ users }) => {

  return (
    <div className="cards" itemID="cards">
      {users.map((user) => (
          <UserDetailsBlock user={user} key={user.email}/>
      ))}
    </div>
  );
};

export default UserList;
