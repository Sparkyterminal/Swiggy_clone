import { useState } from "react";

const UserCard = (props) => {
  const [count] = useState(0);
  const { name, location } = props;

  return (
    <div className="userCard">
      <h1>Count= {count}</h1>
      <h2>Name : {name}</h2>
      <h2>Location : {location}</h2>
      <h2>Portfolio : Sparkyterminal</h2>
    </div>
  );
};

export default UserCard;
