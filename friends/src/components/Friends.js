import React from "react";

import { deleteFriend } from '../actions'

const Friends = props => {
  return(
    <div>
      <h2>{props.friend.name}</h2>
      <p>AGE: {props.friend.age}</p>
      <p>EMAIL: {props.friend.email}</p>
      <button>UPDATE</button>
      <br></br>
      <button name={props.friend.id} onClick={props.deleteFriend}>
      DELETE</button>
    </div>
  )
}

export default Friends;