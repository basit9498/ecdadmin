import {
  ORDER_CLEAR_MESSAGES,
  ORDER_SUPPLIER_GET_FAIL,
  ORDER_SUPPLIER_GET_REQUEST,
  ORDER_SUPPLIER_GET_SCCUESS,
  ORDER_SUPPLIER_LOADER_ASSIGN_REMOVE,
  ORDER_SUPPLIER_LOADER_ASSIGN_SET,
  ORDER_VERIFY_PAYMENT,
} from "../constant";

const initalState = {
  isloading: false,
  orderSupplier: [],
  successMessage: null,
  errorMessage: null,
  orderAssign: null,
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

    // Order Assign Set and Remove
    case ORDER_SUPPLIER_LOADER_ASSIGN_SET:
      return {
        ...state,
        isloading: false,
        orderAssign: action.payload,
      };
    case ORDER_SUPPLIER_LOADER_ASSIGN_REMOVE:
      return {
        ...state,
        isloading: false,
        orderAssign: null,
      };
    case ORDER_VERIFY_PAYMENT:
      const updateOrders = state.orderSupplier?.map((data) => {
        if (data._id == action.payload) {
          data.paymentInfo.payment_verify = "DONE";
        }
        return data;
      });
      return {
        ...state,
        orderSupplier: updateOrders,
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
