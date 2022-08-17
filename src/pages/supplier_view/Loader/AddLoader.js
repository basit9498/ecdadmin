import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import ModalBox from "../../../components/ModalBox";
import Cross from "../../../assets/img/cross.svg";
import CaretDown from "../../../assets/img/caret-down.svg";
import { Formik } from "formik";
import {
  getAllLoader,
  supplierLoaderAdd,
} from "../../../store/action/supplierLoader.action";
import { useDispatch, useSelector } from "react-redux";

const AddLoader = ({ openModal, hideModal, callBack }) => {
  const [suppliers, setSuppliers] = useState();
  const { supplierId } = useSelector((state) => state.supplier);
  console.log("supp", supplierId);
  const dispatch = useDispatch();

  useEffect(() => {
    setSuppliers(supplierId);
  }, [suppliers]);
  return (
    <>
      <ModalBox open={openModal} hide={hideModal} className="w-[700px] p-6">
        <section className="flex  justify-between items-center">
          <Heading text="Add Loader" />
          <Button
            img={Cross}
            onClick={() => {
              hideModal(false);
            }}
            imgClass="h-4"
          />
        </section>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            contactNumber: "",
            address: "",
            vehicleReg: "",
            selectType: "",
            fiveKMPrice: "",
            outOFiveKMPrice: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            // const payload =
            dispatch(
              supplierLoaderAdd({
                name: values.fullName,
                email: values.email,
                password: values.password,
                address: values.address,
                contact: values.contactNumber,
                registrationNumber: values.vehicleReg,
                supplier: suppliers?._id,
                vch_type: values.selectType,
                within_range: values.fiveKMPrice,
                out_range: values.outOFiveKMPrice,
              })
            );
            // This For Just Temporty
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <from className="mt-4 flex justify-between flex-wrap">
              <div className=" w-[300px] mb-4">
                <input
                  value={values.fullName}
                  onChange={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Full name"
                />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  type="email"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  type="password"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Password"
                />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.contactNumber}
                  onChange={handleChange("contactNumber")}
                  onBlur={handleBlur("contactNumber")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Contect number"
                />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.address}
                  onChange={handleChange("address")}
                  onBlur={handleBlur("address")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Address"
                />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.vehicleReg}
                  onChange={handleChange("vehicleReg")}
                  onBlur={handleBlur("vehicleReg")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Vehicle Reg.No"
                />
              </div>
              <div className=" w-[300px] mb-4 relative">
                <select
                  value={values.selectType}
                  onChange={handleChange("selectType")}
                  onBlur={handleBlur("selectType")}
                  className="h-11 border text-sm w-full pl-2"
                >
                  <option>select type</option>
                  <option value="car">Car</option>
                  <option value="truck">Truck</option>
                </select>
                <img src={CaretDown} className="absolute top-5 right-3" />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.fiveKMPrice}
                  onChange={handleChange("fiveKMPrice")}
                  onBlur={handleBlur("fiveKMPrice")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="5-KM price"
                />
              </div>
              <div className=" w-[300px] mb-4">
                <input
                  value={values.outOFiveKMPrice}
                  onChange={handleChange("outOFiveKMPrice")}
                  onBlur={handleBlur("outOFiveKMPrice")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Out of 5-KM price"
                />
              </div>
              <div className="w-full mb-4">
                <Button
                  onClick={handleSubmit}
                  className="w-full h-12 bg-primary text-white"
                  text="Add Loader"
                />
              </div>
            </from>
          )}
        </Formik>
      </ModalBox>
    </>
  );
};

export default AddLoader;
