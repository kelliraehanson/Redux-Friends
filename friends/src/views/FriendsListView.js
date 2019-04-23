import React from "react";
import { connect } from "react-redux";

import FriendsList  from "../components/FriendsList";
import { getFriends } from "../actions";

class FriendsListView extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      this.props.getFriends();
    }
  
    render() {

      if (this.props.fetching) {
        return <p>Loading Friends...</p>
      }
      return (
        <div className="FriendsList_wrapper">
          <FriendsList friends={this.props.friends} />
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return{
      friends: state.friendReducer.friends,
      fetching: state.friendReducer.fetching
    }
  }
  

  export default connect(
    mapStateToProps,
    { getFriends }
  )(FriendsListView);
  