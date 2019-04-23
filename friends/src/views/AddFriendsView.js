import React from 'react';
import { connect } from 'react-redux';

import { addFriends } from '../actions';

import FriendsForm from '../components/FriendsForm';

function AddFriendsView(props) {
  return <FriendsForm {...props} />;
}

export default connect(
  null,
  { addFriends }
)(AddFriendsView);