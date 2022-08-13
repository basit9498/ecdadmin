import supplierService from "../../services/supplier.service";
import {
  SUPPLIER_GET_ALL_LIST_FAIL,
  SUPPLIER_GET_ALL_LIST_REQUEST,
  SUPPLIER_GET_ALL_LIST_SUCCESS,
  SUPPLIER_REMOVE_ID,
  SUPPLIER_SET_ID,
  SUPPLIER_ADD_REQUEST,
  SUPPLIER_ADD_SUCCESS,
  SUPPLIER_ADD_FAIL
} from "../constant";

export const getAllSupplier = () => async (dispatch) => {
  dispatch({
    type: SUPPLIER_GET_ALL_LIST_REQUEST,
  });

  try {
    const response = await supplierService.getAllSupplier();
    console.log("response", response.data);
    if (response.data.success == true) {
      dispatch({
        type: SUPPLIER_GET_ALL_LIST_SUCCESS,
        payload: response.data.allSuppliers,
      });
    } else {
      dispatch({
        type: SUPPLIER_GET_ALL_LIST_FAIL,
        payload: "LIST_NOT_LOADED",
      });
    }
  } catch (e) {
    dispatch({
      type: SUPPLIER_GET_ALL_LIST_FAIL,
      payload: "NETWORK_ERROR",
    });
  }
};



export const supplierAdd = (data) => async (dispatch) => {
  dispatch({
    type: SUPPLIER_ADD_REQUEST,
  });
  try {
    const response = await supplierService.addSuppier(data)
    if (response.data) {
      dispatch({
        type: SUPPLIER_ADD_SUCCESS,
        payload: response.data?.supplier,
      })
    } else {
      dispatch({
        type: SUPPLIER_ADD_FAIL,
      })
    }
  } catch (error) {
    dispatch({
      type: SUPPLIER_ADD_FAIL,
      payload: error,
    })
  }
}




export const setSupplierId = (id) => {
  return {
    type: SUPPLIER_SET_ID,
    payload: id,
  };
};
export const removeSupplierId = () => {
  return {
    type: SUPPLIER_REMOVE_ID,
  };
};
