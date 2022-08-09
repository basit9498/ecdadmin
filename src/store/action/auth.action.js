import authService from "../../services/auth.service";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAIL,
} from "../constant";

export const loginUser = (data) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  try {
    const response = await authService.userLogin(data);
    // console.log("Respoaw", response.data);
    if (response.data.success == true) {
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("UserId", response.data.user._id);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data.user,
      });
    } else {
      dispatch({
        type: USER_LOGIN_FAIL,
      });
    }
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT_REQUEST,
  });
  try {
    const response = await authService.userLogout();
    // console.log("UserLogout", response);
    if (response.data.success == true) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("UserId");
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: USER_LOGOUT_FAIL,
      });
    }
  } catch (e) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: e,
    });
  }
};

export const loginUserChecking = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING_REQUEST,
  });

  try {
    const userId = localStorage.getItem("UserId");
    // console.log("userId", userId);
    if (userId) {
      const response = await authService.userGetData(userId);
      // console.log("Respoaw", response);
      if (response.data.success == true) {
        // localStorage.setItem("UserToken", response.data.token);
        // localStorage.setItem("UserId", response.data.user._id);
        dispatch({
          type: USER_LOADING_SUCCESS,
          payload: response.data.user,
        });
      } else {
        dispatch({
          type: USER_LOADING_FAIL,
        });
      }
    }
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};
