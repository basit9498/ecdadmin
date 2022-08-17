import {
  SUPPLIER_LOADER_ADD_REQUEST,
  SUPPLIER_LOADER_ADD_SCCUESS,
  SUPPLIER_LOADER_ADD_FAIL,
  LOADER_GET_FAIL,
  LOADER_GET_REQUEST,
  LOADER_GET_SCCUESS,
} from "../constant";

const initalState = {
  isloading: false,
  supplierLoaderList: [],
  errorMessge: null,
  successMessage: null,
  loaderList: [],
};
const supplierLoaderReducer = (state = initalState, action) => {
  switch (action.type) {
    case SUPPLIER_LOADER_ADD_REQUEST:
      return {
        ...state,
        isloading: true,
        errorMessge: null,
        successMessage: null,
      };
    case SUPPLIER_LOADER_ADD_SCCUESS:
      return {
        ...state,
        isloading: false,
        errorMessge: null,
        successMessage: action.payload,
      };
    case SUPPLIER_LOADER_ADD_FAIL:
      return {
        ...state,
        successMessage: null,
        errorMessge: action.errorMessagg,
      };
    //   Loader List
    case LOADER_GET_REQUEST:
      return {
        isloading: true,
        loaderList: null,
      };
    case LOADER_GET_SCCUESS:
      return {
        isloading: false,
        loaderList: action.payload,
      };
    case LOADER_GET_FAIL:
      return {
        isloading: false,
        loaderList: null,
      };
    default:
      return state;
  }
};

export default supplierLoaderReducer;
