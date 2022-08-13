import React from "react";
import { Link } from "react-router-dom";
import SupplierIcon from "../../assets/img/sup.svg";
import Loader from "../../assets/img/loader.svg";

const Aside = () => {
  return (
    <>
      <div className="">
        <ul>
          <Link
            to="/"
            className="flex flex-col items-center border-b border-white pb-8 mb-9"
          >
            <span className="text-sm text-white font-medium mb-2">
              Supplier
            </span>
            <img src={SupplierIcon} alt="" />
            <img />
          </Link>
          <Link
            to="/"
            className="flex flex-col items-center border-b border-white pb-8  mb-9"
          >
            <span className="text-sm text-white font-medium mb-2">Loader</span>
            <img src={Loader} alt="" />
            <img />
          </Link>
          <Link
            to="/order"
            className="flex flex-col items-center border-b border-white pb-8  mb-9"
          >
            <span className="text-sm text-white font-medium mb-2">Order</span>
            <img src={Loader} alt="" />
            <img />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Aside;
