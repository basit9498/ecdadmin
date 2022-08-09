import {
  USER_LOADING_FAIL,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "../constant";

const initalState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: null,
        isAuthenticated: false,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      };

    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        // isAuthenticated: false,
        user: null,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      };

    case USER_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      };
    // LOADING
    case USER_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: null,
      };

    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case USER_LOADING_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
