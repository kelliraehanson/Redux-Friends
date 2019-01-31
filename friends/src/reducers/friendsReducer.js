import {
    FETCHING_FRIENDS,
    SUCCESS_FRIENDS,
    FAILURE_FRIENDS
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
     
      default:
        return state;
    }
  };

  export default friendReducer;
  