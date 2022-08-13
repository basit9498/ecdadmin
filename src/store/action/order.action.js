import orderService from "../../services/order.service";
import {
  ORDER_CLEAR_MESSAGES,
  ORDER_SUPPLIER_GET_FAIL,
  ORDER_SUPPLIER_GET_REQUEST,
  ORDER_SUPPLIER_GET_SCCUESS,
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

export const clearOrderMessage = () => {
  return {
    type: ORDER_CLEAR_MESSAGES,
  };
};
