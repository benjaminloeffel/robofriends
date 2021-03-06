import { ApplicationState, ApplicationAction } from "./types";

export const initialState: ApplicationState = {
  searchTerm: "",
  loading: false,
  users: [],
  error: {
    name: "",
    message: ""
  }
};

export const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TERM":
      return Object.assign({}, state, {
        searchTerm: action.payload
      });
    case "REQUEST_USERS_PENDING":
      return Object.assign({}, state, { isLoading: true });
    case "REQUEST_USERS_SUCCESS":
      return Object.assign({}, state, {
        users: action.payload,
        isLoading: false
      });
    case "REQUEST_USERS_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false
      });
    default:
      return state;
  }
};

// /**
//  * For more information on Reducers visit the link below:
//  * https://redux.js.org/basics/reducers
//  */
