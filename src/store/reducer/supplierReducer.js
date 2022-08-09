import {
  SUPPLIER_GET_ALL_LIST_FAIL,
  SUPPLIER_GET_ALL_LIST_REQUEST,
  SUPPLIER_GET_ALL_LIST_SUCCESS,
  SUPPLIER_REMOVE_ID,
  SUPPLIER_SET_ID,
} from "../constant";

const initalState = {
  isloading: false,
  supplierList: [],
  supplierErrorMessage: null,
  supplierId: null,
};

const supplierReducer = (state = initalState, action) => {
  switch (action.type) {
    case SUPPLIER_GET_ALL_LIST_REQUEST:
      return {
        ...state,
        isloading: true,
        supplierList: null,
        supplierErrorMessage: null,
      };
    case SUPPLIER_GET_ALL_LIST_SUCCESS:
      return {
        ...state,
        isloading: false,
        supplierList: action.payload,
        supplierErrorMessage: null,
      };

    case SUPPLIER_GET_ALL_LIST_FAIL:
      return {
        isloading: false,
        supplierList: null,
        supplierErrorMessage: action.payload,
      };
    case SUPPLIER_SET_ID:
      return {
        ...state,
        isloading: false,
        supplierErrorMessage: null,
        supplierId: action.payload,
      };
    case SUPPLIER_REMOVE_ID:
      return {
        ...state,
        isloading: false,
        supplierErrorMessage: null,
        supplierId: null,
      };
    default:
      return state;
  }
};

export default supplierReducer;
