import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Supplier from "../pages/supplier";
import SupplierView from "../pages/supplier_view";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Supplier />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/supplier_view" element={<SupplierView />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <ProtectedRoute exact path="/" component={Supplier} />
          <ProtectedRoute
            exact
            path="/supplier_view"
            component={SupplierView}
          /> */}
          {/* Index Page */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Supplier />
              </PrivateRoute>
            }
          />
          {/* Supplier View */}
          <Route
            path="/supplierview"
            element={
              <PrivateRoute>
                <SupplierView />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
