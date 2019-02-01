import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS_FRIENDS = 'SUCCESS_FRIENDS';
export const FAILURE_FRIENDS = 'FAILURE_FRIENDS';

export const ADD_FRIENDS = 'ADD_FRIENDS';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS })
    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({
            type: SUCCESS_FRIENDS,
            payload: response.data
        });
    })
    .catch(err => dispatch({
        type: FAILURE_FRIENDS,
        payload: err
    })
)};

export const addFriends = friend => dispatch => {
    dispatch({ type: ADD_FRIENDS });
    axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response => {
        console.log(response);
        dispatch({
            type: ADD_FRIENDS_SUCCESS,
            payload: response.data
        });
    })
    .catch(err => dispatch({ 
        type: ADD_FRIENDS_FAILURE, 
        payload: err 
    })
)};

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND });
    axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
        dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data })
    })
    .catch(err => dispatch({ 
        type: DELETE_FRIEND_FAILURE, 
        payload: err 
    })
)}
