import {
  SUPPLIER_LOADER_ADD_REQUEST,
  SUPPLIER_LOADER_ADD_SCCUESS,
  SUPPLIER_LOADER_ADD_FAIL,
  LOADER_GET_REQUEST,
  LOADER_GET_SCCUESS,
  LOADER_GET_FAIL,
  LOADER_DELETE_SCCUESS,
  LOADER_CLEAR_MESSAGE,
  LOADER_DATA_SET_SCCUESS,
  LOADER_DATA_SET_REMOVE,
} from "../constant";
import loaderService from "../../services/loader.service";

export const supplierLoaderAdd = (data) => async (dispatch) => {
  dispatch({
    type: SUPPLIER_LOADER_ADD_REQUEST,
  });
  try {
    const response = await loaderService.addsupplierLoader(data);
    if (response.data) {
      dispatch({
        type: SUPPLIER_LOADER_ADD_SCCUESS,
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: SUPPLIER_LOADER_ADD_FAIL,
        errorMessagg: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: SUPPLIER_LOADER_ADD_FAIL,
      errorMessagg: "NetWork ERROR",
    });
  }
};

// Loader List
export const getAllLoader = () => async (dispatch) => {
  dispatch({
    type: LOADER_GET_REQUEST,
  });

  try {
    const response = await loaderService.getAllLoader();
    if (response.data.success == true) {
      dispatch({
        type: LOADER_GET_SCCUESS,
        payload: response.data.loader,
      });
    } else {
      dispatch({
        type: LOADER_GET_FAIL,
        payload: "LIST_NOT_LOADED",
      });
    }
  } catch (e) {
    dispatch({
      type: LOADER_GET_FAIL,
      payload: "NETWORK_ERROR",
    });
  }
};

export const deleteLoader = (id) => async (dispatch) => {
  const response = await loaderService.deleteLoader(id);
  if (response.data.success == true) {
    dispatch({
      type: LOADER_DELETE_SCCUESS,
    });
  }
};

export const updateLoader = async (id, data) => {
  await loaderService.updateLoader(id, data);
};
// Loader Set Data:
export const loaderSetData = (data) => {
  return {
    type: LOADER_DATA_SET_SCCUESS,
    payload: data,
  };
};
export const loaderRemoveData = () => {
  return {
    type: LOADER_DATA_SET_REMOVE,
  };
};
// Clear Message
export const clearLoaderMessage = () => {
  return {
    type: LOADER_CLEAR_MESSAGE,
  };
};
