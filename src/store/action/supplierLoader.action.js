import {
  SUPPLIER_LOADER_ADD_REQUEST,
  SUPPLIER_LOADER_ADD_SCCUESS,
  SUPPLIER_LOADER_ADD_FAIL,
  LOADER_GET_REQUEST,
  LOADER_GET_SCCUESS,
  LOADER_GET_FAIL,
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
