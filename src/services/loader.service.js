import httpServices from "./http.services";


const addsupplierLoader = (body) => {
    return httpServices
        .post('/loader/just_register', body)
        .then((data) => data)
        .catch((error) => error)
}



export default {
    addsupplierLoader
}