import React from "react";

const Friends = props => {
  return(
    <div>
      <h2>{props.friend.name}</h2>
      <p>AGE: {props.friend.age}</p>
      <p>EMAIL: {props.friend.email}</p>
      <button>DELETE</button>
    </div>
  )
}

export default Friends;