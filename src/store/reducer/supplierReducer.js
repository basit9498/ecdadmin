import {
  SUPPLIER_GET_ALL_LIST_FAIL,
  SUPPLIER_GET_ALL_LIST_REQUEST,
  SUPPLIER_GET_ALL_LIST_SUCCESS,
  SUPPLIER_REMOVE_ID,
  SUPPLIER_SET_ID,
  SUPPLIER_ADD_REQUEST,
  SUPPLIER_ADD_SUCCESS,
  SUPPLIER_ADD_FAIL,
  SUPPLIER_DEL_REQUEST,
  SUPPLIER_DEL_SCCCESS,
  SUPPLIER_DEL_FAIL,
  SUPPLIER_CLEAR_MESSAGES,
} from "../constant";

const initalState = {
  isloading: false,
  supplierList: [],
  supplierErrorMessage: null,
  supplierSuccessMessage: null,
  supplierId: null,
  data: null,
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

    case SUPPLIER_ADD_REQUEST:
      return {
        ...state,
        isloading: true,
        data: null,
        supplierErrorMessage: null,
      };
    case SUPPLIER_ADD_SUCCESS:
      return {
        ...state,
        isloading: false,
        data: action.payload,
        supplierList: [...state.supplierList, action.payload],
      };
    case SUPPLIER_ADD_FAIL:
      return {
        ...state,
        isloading: false,
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

    case SUPPLIER_DEL_REQUEST:
      return {
        ...state,
        isloading: true,
        supplierErrorMessage: null,
        supplierSuccessMessage: null,
      };
    case SUPPLIER_DEL_SCCCESS:
      return {
        ...state,
        isloading: false,
        supplierErrorMessage: null,
        supplierSuccessMessage: "SUPPLIER_DEL_SCCCESS",
      };
    case SUPPLIER_DEL_FAIL:
      return {
        ...state,
        isloading: false,
        supplierErrorMessage: "SUPPLIER_DEL_FAIL",
        supplierSuccessMessage: null,
      };

    // Clear Message
    case SUPPLIER_CLEAR_MESSAGES:
      return {
        ...state,
        isloading: false,
        supplierErrorMessage: null,
        supplierSuccessMessage: null,
      };
    default:
      return state;
  }
};

export default supplierReducer;
