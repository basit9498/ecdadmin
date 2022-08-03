import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Login from '../pages/Login'
import Home from '../pages/Home'

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Home />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Index