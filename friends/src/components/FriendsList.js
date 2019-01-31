import React from "react";
import Friends from "./Friends";

const FriendsList = props => {
  console.log(props.friends)
  return (
    <ul>
      {props.friends.map(friend => {
        return <Friends key={friend.name} friend={friend} />;
      })}
    </ul>
  );
};


export default FriendsList;