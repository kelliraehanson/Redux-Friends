import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS_FRIENDS = 'SUCCESS_FRIENDS';
export const FAILURE_FRIENDS = 'FAILURE_FRIENDS';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });

    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
        console.log(response);
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