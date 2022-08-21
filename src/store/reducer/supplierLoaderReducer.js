import {
  SUPPLIER_LOADER_ADD_REQUEST,
  SUPPLIER_LOADER_ADD_SCCUESS,
  SUPPLIER_LOADER_ADD_FAIL,
  LOADER_GET_FAIL,
  LOADER_GET_REQUEST,
  LOADER_GET_SCCUESS,
  LOADER_CLEAR_MESSAGE,
  LOADER_DELETE_SCCUESS,
  LOADER_DATA_SET_SCCUESS,
  LOADER_DATA_SET_REMOVE,
} from "../constant";

const initalState = {
  isloading: false,
  supplierLoaderList: [],
  errorMessge: null,
  successMessage: null,
  loaderList: [],
  loaderData: null,
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
        ...state,
        isloading: true,
        loaderList: null,
      };
    case LOADER_GET_SCCUESS:
      return {
        ...state,
        isloading: false,
        loaderList: action.payload,
      };
    case LOADER_GET_FAIL:
      return {
        ...state,
        isloading: false,
        loaderList: null,
      };
    // Loader Set Data
    case LOADER_DATA_SET_SCCUESS:
      return {
        ...state,
        loaderData: action.payload,
      };
    case LOADER_DATA_SET_REMOVE:
      return {
        ...state,
        loaderData: null,
      };
    // Loader Delete
    case LOADER_DELETE_SCCUESS:
      return {
        ...state,
        successMessage: "LOADER_DELETE_SCCUESS",
      };
    // Clear Message
    case LOADER_CLEAR_MESSAGE:
      return {
        ...state,
        successMessage: null,
        errorMessge: null,
      };
    default:
      return state;
  }
};

export default supplierLoaderReducer;
