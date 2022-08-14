import {
    SUPPLIER_LOADER_ADD_REQUEST,
    SUPPLIER_LOADER_ADD_SCCUESS,
    SUPPLIER_LOADER_ADD_FAIL
} from "../constant";
import loaderService from "../../services/loader.service";

export const supplierLoaderAdd = (data) => async (dispatch) => {
    dispatch({
        type: SUPPLIER_LOADER_ADD_REQUEST,
    })
    try {
        const response = await loaderService.addsupplierLoader(data)
        if (response.data) {
            dispatch({
                type: SUPPLIER_LOADER_ADD_SCCUESS,
                payload: response.data.message,
            })
        } else {
            dispatch({
                type: SUPPLIER_LOADER_ADD_FAIL,
                errorMessagg: response.data.message
            })
        }
    } catch (error) {
        dispatch({
            type: SUPPLIER_LOADER_ADD_FAIL,
            errorMessagg: 'NetWork ERROR'
        })
    }
} 
