import React from "react";

const Friends = props => {
  return(
    <div>
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
    </div>
  )
}

// const Friend = props => {
//   return <li>{props.friend.name}</li>;
// };

export default Friends;