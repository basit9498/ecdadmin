import {
  ORDER_CLEAR_MESSAGES,
  ORDER_SUPPLIER_GET_FAIL,
  ORDER_SUPPLIER_GET_REQUEST,
  ORDER_SUPPLIER_GET_SCCUESS,
} from "../constant";

const initalState = {
  isloading: false,
  orderSupplier: [],
  successMessage: null,
  errorMessage: null,
};
const orderReducer = (state = initalState, action) => {
  switch (action.type) {
    case ORDER_SUPPLIER_GET_REQUEST:
      return {
        ...state,
        isloading: false,
        orderSupplier: null,
        successMessage: null,
        errorMessage: null,
      };
    case ORDER_SUPPLIER_GET_SCCUESS:
      return {
        ...state,
        isloading: false,
        orderSupplier: action.payload,
        successMessage: null,
        errorMessage: null,
      };
    case ORDER_SUPPLIER_GET_FAIL:
      return {
        ...state,
        isloading: false,
        orderSupplier: null,
        successMessage: null,
        errorMessage: action.payload,
      };
    // Clear Message
    case ORDER_CLEAR_MESSAGES:
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

export default orderReducer;
