import supplierProductService from "../../services/supplierProduct.service";
import {
  SUPPLIER_PRODUCT_ADD_REQUEST,
  SUPPLIER_PRODUCT_ADD_SUCCESS,
  SUPPLIER_PRODUCT_ADD_FAIL,
  SUPPLIER_PRODUCT_LIST_REQUEST,
  SUPPLIER_PRODUCT_LIST_SUCCESS,
  SUPPLIER_PRODUCT_LIST_FAIL,
  SUPPLIER_PRODUCT_DEL_REQUEST,
  SUPPLIER_PRODUCT_DEL_SCCCESS,
  SUPPLIER_PRODUCT_DEL_FAIL,
  SUPPLIER_PRODUCT_CLEAR_MESSAGES,
  SUPPLIER_PRODUCT_DATA_SET,
  SUPPLIER_PRODUCT_DATA_REMOVE,
  SUPPLIER_PRODUCT_UPDATE_SUCCESS,
} from "../constant";

export const addSupplierProduct = (data) => async (dispatch) => {
  dispatch({
    type: SUPPLIER_PRODUCT_ADD_REQUEST,
  });
  try {
    const response = await supplierProductService.supplierProductAdd(data);
    if (response?.data.success === true) {
      dispatch({
        type: SUPPLIER_PRODUCT_ADD_SUCCESS,
        // successMessage: response?.data.message,
        payload: response?.data,
      });
    } else {
      dispatch({
        type: SUPPLIER_PRODUCT_ADD_FAIL,
        ErrorMessage: response?.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: SUPPLIER_PRODUCT_ADD_FAIL,
      ErrorMessage: "error.response",
    });
  }
};

export const getSupplierProduct = (supplierId) => async (dispatch) => {
  dispatch({
    type: SUPPLIER_PRODUCT_LIST_REQUEST,
  });
  try {
    const response = await supplierProductService.supplierProductList(
      supplierId
    );
    console.log("res", response);
    if (response.data.success === true) {
      dispatch({
        type: SUPPLIER_PRODUCT_LIST_SUCCESS,
        payload: response.data.supplierProducts,
      });
    } else {
      dispatch({
        type: SUPPLIER_PRODUCT_LIST_FAIL,
        ErrorMessage: "API ERROR",
      });
    }
  } catch (error) {
    dispatch({
      type: SUPPLIER_PRODUCT_LIST_FAIL,
      ErrorMessage: error,
    });
  }
};

export const supplierProductDelete = (id) => async (dispatch) => {
  dispatch({
    type: SUPPLIER_PRODUCT_DEL_REQUEST,
  });
  try {
    const response = await supplierProductService.supplierProductDelete(id);
    if (response?.data) {
      dispatch({
        type: SUPPLIER_PRODUCT_DEL_SCCCESS,
      });
    } else {
      dispatch({
        type: SUPPLIER_PRODUCT_DEL_FAIL,
      });
    }
  } catch (error) {
    dispatch({
      type: SUPPLIER_PRODUCT_DEL_FAIL,
    });
  }
};

export const supplierProjectClearMessages = () => {
  return {
    type: SUPPLIER_PRODUCT_CLEAR_MESSAGES,
  };
};

export const productSetData = (data) => {
  return {
    type: SUPPLIER_PRODUCT_DATA_SET,
    payload: data,
  };
};

export const productRemoveData = () => {
  return {
    type: SUPPLIER_PRODUCT_DATA_REMOVE,
  };
};

export const supplierProductUpdate = (id, data) => async (dispatch) => {
  const response = await supplierProductService.supplierProductUpdate(id, data);
  if (response.data.success == true) {
    dispatch({
      type: SUPPLIER_PRODUCT_UPDATE_SUCCESS,
    });
  }
};
