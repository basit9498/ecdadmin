import {
    SUPPLIER_LOADER_ADD_REQUEST,
    SUPPLIER_LOADER_ADD_SCCUESS,
    SUPPLIER_LOADER_ADD_FAIL
} from "../constant";

const initalState = {
    isloading: false,
    supplierLoaderList: [],
    errorMessge: null,
    successMessage: null,
}
const supplierLoaderReducer = (state = initalState, action) => {
    switch (action.type) {
        case SUPPLIER_LOADER_ADD_REQUEST:
            return {
                ...state,
                isloading: true,
                errorMessge: null,
                successMessage: null
            }
        case SUPPLIER_LOADER_ADD_SCCUESS:
            return {
                ...state,
                isloading: false,
                errorMessge: null,
                successMessage: action.payload,
            }
        case SUPPLIER_LOADER_ADD_FAIL:
            return {
                ...state,
                successMessage: null,
                errorMessge: action.errorMessagg
            }
        default:
            return state;
    }
}


export default supplierLoaderReducer;