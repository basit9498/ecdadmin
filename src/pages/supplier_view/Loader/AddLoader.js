import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import ModalBox from "../../../components/ModalBox";
import Cross from "../../../assets/img/cross.svg";
import CaretDown from "../../../assets/img/caret-down.svg";
import { Formik } from "formik";
import {
  getAllLoader,
  loaderRemoveData,
  supplierLoaderAdd,
  updateLoader,
} from "../../../store/action/supplierLoader.action";
import { useDispatch, useSelector } from "react-redux";

const AddLoader = ({
  openModal,
  hideModal,
  callBack,
  setEditMode,
  editMode,
}) => {
  const [suppliers, setSuppliers] = useState();
  const { supplierId } = useSelector((state) => state.supplier);
  const { loaderData } = useSelector((state) => state.loader);
  // console.log("supp", supplierId);
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
              dispatch(getAllLoader());
              setEditMode(false);
              dispatch(loaderRemoveData());
            }}
            imgClass="h-4"
          />
        </section>
        <Formik
          initialValues={{
            fullName: editMode ? loaderData?.name : "",
            email: editMode ? loaderData?.email : "",
            password: "",
            contactNumber: editMode ? loaderData?.contact : "",
            address: editMode ? loaderData?.address : "",
            vehicleReg: editMode ? loaderData?.registrationNumber : "",
            selectType: editMode ? loaderData?.vch_type : "",
            fiveKMPrice: editMode ? loaderData?.within_range : "",
            outOFiveKMPrice: editMode ? loaderData?.out_range : "",
            cnic: editMode ? loaderData?.cnic : "",
            driver_license: editMode ? loaderData?.driver_license : "",
            responsible_person_name: editMode
              ? loaderData?.responsible_person?.name
              : "",
            responsible_person_cnic: editMode
              ? loaderData?.responsible_person?.cnic
              : "",
          }}
          onSubmit={(values) => {
            if (editMode) {
              dispatch(
                updateLoader(loaderData?._id, {
                  name: values.fullName,
                  email: values.email,
                  address: values.address,
                  contact: values.contactNumber,
                  registrationNumber: values.vehicleReg,
                  supplier: suppliers?._id,
                  vch_type: values.selectType,
                  within_range: values.fiveKMPrice,
                  out_range: values.outOFiveKMPrice,
                  cnic: values.cnic,
                  driver_license: values.driver_license,
                  responsible_person: {
                    name: values.responsible_person_name,
                    cnic: values.responsible_person_cnic,
                  },
                })
              );
            } else {
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
                  cnic: values.cnic,
                  driver_license: values.driver_license,
                  responsible_person: {
                    name: values.responsible_person_name,
                    cnic: values.responsible_person_cnic,
                  },
                })
              );
            }

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
                  value={values.cnic}
                  onChange={handleChange("cnic")}
                  onBlur={handleBlur("cnic")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="CNIC"
                />
              </div>
              {!editMode && (
                <>
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
                </>
              )}

              <div className=" w-[300px] mb-4">
                <input
                  value={values.contactNumber}
                  onChange={handleChange("contactNumber")}
                  onBlur={handleBlur("contactNumber")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Contact Number"
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
              <div className=" w-[300px] mb-4">
                <input
                  value={values.driver_license}
                  onChange={handleChange("driver_license")}
                  onBlur={handleBlur("driver_license")}
                  type="text"
                  className="h-11 border text-sm w-full pl-2"
                  placeholder="Driver License No"
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
                  <option value="Car">Car</option>
                  <option value="Truck">Truck</option>
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
              <div className="w-full">
                <div className="mb-2">
                  <h6>Responsible Person Detail</h6>
                </div>
                <div className="flex justify-between">
                  <div className=" w-[300px] mb-4">
                    <input
                      value={values.responsible_person_name}
                      onChange={handleChange("responsible_person_name")}
                      onBlur={handleBlur("responsible_person_name")}
                      type="text"
                      className="h-11 border text-sm w-full pl-2"
                      placeholder="Name"
                    />
                  </div>
                  <div className=" w-[300px] mb-4">
                    <input
                      value={values.responsible_person_cnic}
                      onChange={handleChange("responsible_person_cnic")}
                      onBlur={handleBlur("responsible_person_cnic")}
                      type="text"
                      className="h-11 border text-sm w-full pl-2"
                      placeholder="CNIC"
                    />
                  </div>
                </div>
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
