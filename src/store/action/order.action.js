import orderService from "../../services/order.service";
import {
  ORDER_CLEAR_MESSAGES,
  ORDER_SUPPLIER_GET_FAIL,
  ORDER_SUPPLIER_GET_REQUEST,
  ORDER_SUPPLIER_GET_SCCUESS,
  ORDER_SUPPLIER_LOADER_ASSIGN_SET,
  ORDER_VERIFY_PAYMENT,
} from "../constant";

export const getOrderSupplier = (id) => async (dispatch) => {
  dispatch({
    type: ORDER_SUPPLIER_GET_REQUEST,
  });

  try {
    const response = await orderService.getOrderSupplier(id);
    if (response.data.success == true) {
      dispatch({
        type: ORDER_SUPPLIER_GET_SCCUESS,
        payload: response.data.orders,
      });
    } else {
      dispatch({
        type: ORDER_SUPPLIER_GET_FAIL,
        payload: "LIST_NOT_LOADED",
      });
    }
  } catch (e) {
    dispatch({
      type: ORDER_SUPPLIER_GET_FAIL,
      payload: "NETWORK_ERROR",
    });
  }
};

export const verifyOrderPayment = (id) => async (dispatch) => {
  try {
    const response = await orderService.verifyOrderPayment(id);
    if (response.data.success == true) {
      dispatch({
        type: ORDER_VERIFY_PAYMENT,
        payload: id,
      });
    } else {
      alert(response.data.message);
    }
  } catch (e) {
    alert("NETWORK_ERROR");
  }
};

export const clearOrderMessage = () => {
  return {
    type: ORDER_CLEAR_MESSAGES,
  };
};

export const loaderAssignRedxSetData = (data) => {
  return {
    type: ORDER_SUPPLIER_LOADER_ASSIGN_SET,
    payload: data,
  };
};

export const setOrderLoaderPick = (data) => async (dispatch) => {
  const response = await orderService.setOrderLoaderPick(data);
  // console.log("response", response);
};
