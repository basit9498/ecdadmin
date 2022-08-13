import {
  SUPPLIER_GET_ALL_LIST_FAIL,
  SUPPLIER_GET_ALL_LIST_REQUEST,
  SUPPLIER_GET_ALL_LIST_SUCCESS,
  SUPPLIER_REMOVE_ID,
  SUPPLIER_SET_ID,
  SUPPLIER_ADD_REQUEST,
  SUPPLIER_ADD_SUCCESS,
  SUPPLIER_ADD_FAIL
} from "../constant";

const initalState = {
  isloading: false,
  supplierList: [],
  supplierErrorMessage: null,
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
        supplierErrorMessage: null
      }
    case SUPPLIER_ADD_SUCCESS:
      return {
        ...state,
        isloading: false,
        data: action.payload,
        supplierList: [...state.supplierList, action.payload]

      }
    case SUPPLIER_ADD_FAIL:
      return {
        ...state,
        isloading: false,
        supplierErrorMessage: action.payload,
      }


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
