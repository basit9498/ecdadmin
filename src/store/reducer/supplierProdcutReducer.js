import {
    SUPPLIER_PRODUCT_ADD_REQUEST,
    SUPPLIER_PRODUCT_ADD_SUCCESS,
    SUPPLIER_PRODUCT_ADD_FAIL,
    SUPPLIER_PRODUCT_LIST_REQUEST,
    SUPPLIER_PRODUCT_LIST_SUCCESS,
    SUPPLIER_PRODUCT_LIST_FAIL
} from "../constant";


const initalState = {
    isloading: false,
    supplierProductList: [],
    successMessage: null,
    errorMessage: null,
}
const supplierProdcutReducer = (state = initalState, action) => {
    switch (action.type) {
        case SUPPLIER_PRODUCT_ADD_REQUEST:
            return {
                ...state,
                isloading: true,
                successMessage: null,
                errorMessage: null,
            }
        case SUPPLIER_PRODUCT_ADD_SUCCESS:
            return {
                ...state,
                isloading: false,
                successMessage: 'action.successMessage',
                errorMessage: null,
                supplierProductList: '[...action.payload]'
            }
        case SUPPLIER_PRODUCT_ADD_FAIL:
            return {
                ...state,
                isloading: false,
                errorMessage: 'action.ErrorMessage',
                successMessage: null,
            }
        case SUPPLIER_PRODUCT_LIST_REQUEST:
            return {
                ...state,
                isloading: true,
                successMessage: null,
                errorMessage: null,
            }
        case SUPPLIER_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                isloading: false,
                supplierProductList: action.payload,
                successMessage: null,
                errorMessage: null,
            }
        case SUPPLIER_PRODUCT_LIST_FAIL:
            return {
                ...state,
                isloading: false,
                successMessage: null,
                errorMessage: action.ErrorMessage,
            }
        default:
            return state;
    }
}


export default supplierProdcutReducer;