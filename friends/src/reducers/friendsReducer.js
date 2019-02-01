import {
    FETCHING_FRIENDS,
    SUCCESS_FRIENDS,
    FAILURE_FRIENDS,
    ADD_FRIENDS,
    ADD_FRIENDS_SUCCESS,
    ADD_FRIENDS_FAILURE,
    DELETE_FRIEND,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE


  } from "../actions";
   
  const initialState = {
    friends: [],
    fetching: false,
    error: null
   
  };
  const friendReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_FRIENDS:
      return {
        ...state,
        fetching: true,
        // error: null
      };
      case SUCCESS_FRIENDS:
      console.log(action.payload)
      return {
        ...state,
        friends: action.payload,
        fetching: false,
        error: null
      }
      case FAILURE_FRIENDS:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }
      case ADD_FRIENDS:
      return {
      ...state,
      fetching: true
      };
      case ADD_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: null,
        fetching: false
      }
      case ADD_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }
      case DELETE_FRIEND:
      return {
        ...state,
        deleteFriend: true,
      }
      case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deleteFriend: false,
        friends: [...action.payload]
      }
      case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deleteFriend: false,
        error: action.payload
      }
     
      default:
        return state;
    }
  };

  export default friendReducer;
  