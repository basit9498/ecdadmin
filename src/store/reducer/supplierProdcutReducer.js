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
} from "../constant";

const initalState = {
  isloading: false,
  supplierProductList: [],
  successMessage: null,
  errorMessage: null,
};
const supplierProdcutReducer = (state = initalState, action) => {
  switch (action.type) {
    case SUPPLIER_PRODUCT_ADD_REQUEST:
      return {
        ...state,
        isloading: true,
        successMessage: null,
        errorMessage: null,
      };
    case SUPPLIER_PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        isloading: false,
        successMessage: "action.successMessage",
        errorMessage: null,
        supplierProductList: "[...action.payload]",
      };
    case SUPPLIER_PRODUCT_ADD_FAIL:
      return {
        ...state,
        isloading: false,
        errorMessage: "action.ErrorMessage",
        successMessage: null,
      };
    case SUPPLIER_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        isloading: true,
        successMessage: null,
        errorMessage: null,
      };
    case SUPPLIER_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isloading: false,
        supplierProductList: action.payload,
        successMessage: null,
        errorMessage: null,
      };
    case SUPPLIER_PRODUCT_LIST_FAIL:
      return {
        ...state,
        isloading: false,
        successMessage: null,
        errorMessage: action.ErrorMessage,
      };

    case SUPPLIER_PRODUCT_DEL_REQUEST:
      return {
        ...state,
        isloading: true,
        successMessage: null,
        errorMessage: null,
      };
    case SUPPLIER_PRODUCT_DEL_SCCCESS:
      return {
        ...state,
        isloading: false,
        successMessage: "SUPPLIER_PRODUCT_DEL_SCCCESS",
        errorMessage: null,
      };
    case SUPPLIER_PRODUCT_DEL_FAIL:
      return {
        ...state,
        isloading: false,
        successMessage: null,
        errorMessage: "SUPPLIER_PRODUCT_DEL_FAIL",
      };

    // Clear Message
    case SUPPLIER_PRODUCT_CLEAR_MESSAGES:
      return {
        ...state,
        isloading: false,
        successMessage: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default supplierProdcutReducer;
