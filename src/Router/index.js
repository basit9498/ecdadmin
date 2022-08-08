import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Login from '../pages/Login'
import Supplier from '../pages/supplier'
import SupplierView from "../pages/supplier_view"

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Supplier />} />
                    <Route path="/supplier_view" element={<SupplierView />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Index