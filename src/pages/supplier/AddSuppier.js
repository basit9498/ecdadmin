import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import ModalBox from "../../components/ModalBox";
import Cross from "../../assets/img/cross.svg";
import Select from "react-select";
import CaretDown from "../../assets/img/caret-down.svg";
import GoogleMap from "./GoogleMap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSupplier,
  removeSupplierId,
  supplierAdd,
  updateSupplier,
} from "../../store/action/supplier.action";
import { Formik } from "formik";
import { categoryList } from "./SupplierProductCat.js";

const AddSuppier = ({ modalOpen, modalHide, editMode, setEditMode }) => {
  const [editModeData, setEditModeData] = useState([]);
  const [locationLat, setLocationLat] = useState("");
  const [locationLng, setLocationLng] = useState("");
  const [description, setDescription] = useState("");
  const [addPayment, setAddPayment] = useState([]);
  const [paymentData, setPaymentData] = useState({
    name: "",
    trans_id: "",
  });
  const [addPaymentError, setAddPaymentError] = useState(false);
  const [googleMapLocationError, setGoogleMapLocationError] = useState(false);

  const dispatch = useDispatch();

  const { supplierList, supplierId } = useSelector((state) => state.supplier);
  const addPaymentMethod = () => {
    setAddPayment([...addPayment, paymentData]);
    console.log("pay:", addPayment);
    setPaymentData({
      name: "",
      trans_id: "",
    });
  };
  useEffect(() => {
    console.log(editMode);
    if (editMode?.status == true) {
      console.log(supplierId);
      setAddPayment(supplierId?.payement_methods);
      setLocationLat(supplierId?.location?.lat);
      setLocationLng(supplierId?.location?.lng);
      setDescription(supplierId?.location?.description);
      //   setEditModeData(supplierList?.filter((data) => data._id == editMode.id));
      //   console.log(
      //     "Edit",
      //     supplierList?.filter((data) => data._id == editMode.id)
      //   );
    }
  }, [editMode]);

  return (
    <>
      <ModalBox open={modalOpen} hide={modalHide} className="w-[700px]  p-6">
        <section className="flex justify-between  items-center">
          <Heading text="Add Supplier" />
          <Button
            img={Cross}
            onClick={() => {
              modalHide(false);
              setEditMode({
                status: false,
                id: null,
              });
              dispatch(removeSupplierId());
              dispatch(getAllSupplier());
            }}
            imgClass="h-4 "
            className="ml-auto block w-max"
          />
        </section>
        {/* ---------------------------------- */}
        <div className="mt-4">
          <Formik
            initialValues={{
              supplierName:
                editMode?.status == true ? supplierId?.supplierName : "",
              area: editMode?.status == true ? supplierId?.area : "",
              category:
                editMode?.status == true
                  ? categoryList.filter((data) =>
                      supplierId?.category.includes(data.value)
                    )
                  : "",
              within_range:
                editMode?.status == true
                  ? supplierId?.loader_price?.within_range
                  : "",
              out_range:
                editMode?.status == true
                  ? supplierId?.loader_price?.out_range
                  : "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.supplierName) {
                errors.supplierName = "Supplier Name Required";
              } else if (!values.category || values.category.length == 0) {
                errors.category = "At least One Catgeory required Required";
              } else if (!values.area) {
                errors.area = "Supplier Area Name Required";
              } else if (!values.within_range) {
                errors.within_range = "Price Required";
              } else if (!Number(values.within_range)) {
                errors.within_range = "Price Should be in Number";
              } else if (!values.out_range) {
                errors.out_range = "Price Required";
              } else if (!Number(values.out_range)) {
                errors.out_range = "Price Should be in Number";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                addPayment.length == 0 ||
                addPayment == "" ||
                addPayment == null
              ) {
                setAddPaymentError(true);
                return;
              } else {
                setAddPaymentError(false);
              }

              if (!locationLat || !locationLng) {
                setGoogleMapLocationError(true);
              } else {
                setGoogleMapLocationError(false);
              }

              //   Data Setting
              const categoryData = values.category?.map((ele) => ele?.value);
              const payload = {
                supplierName: values.supplierName,
                area: values.area,
                location: {
                  lat: locationLat,
                  lng: locationLng,
                  description: description,
                },
                category: categoryData,
                payement_methods: addPayment,
                loader_price: {
                  within_range: values.within_range,
                  out_range: values.out_range,
                },
              };
              //   console.log("payload", payload);
              if (editMode?.status == true) {
                dispatch(updateSupplier(supplierId?._id, payload));
              } else {
                dispatch(supplierAdd(payload));
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between">
                  <div className=" w-[300px] mb-4">
                    <input
                      type="text"
                      name="supplierName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.supplierName}
                      className="h-11 border text-sm w-full pl-2"
                      placeholder="Supplier Name"
                    />
                    {errors.supplierName && touched.supplierName && (
                      <>
                        <div className="text-red-700 text-xs">
                          {errors.supplierName}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="w-[300px] h-11 select_autocomplete border  relative">
                    <Select
                      defaultValue={values.category}
                      placeholder="Category"
                      name="category"
                      onChange={(value) => {
                        setFieldValue("category", value);
                      }}
                      onBlur={handleBlur}
                      isClearable={false}
                      isMulti
                      options={categoryList}
                      components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                      }}
                    />
                    <img
                      src={CaretDown}
                      className="absolute top-[19px] right-2"
                    />
                    {errors.category && touched.category && (
                      <>
                        <div className="text-red-700 text-xs">
                          {errors.category}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <div className=" w-[300px] mb-4">
                    <input
                      type="text"
                      value={values.area}
                      className="h-11 border text-sm w-full pl-2"
                      placeholder=" Area"
                      name="area"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.area && touched.area && (
                      <>
                        <div className="text-red-700 text-xs">
                          {errors.area}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-full mb-4 mt-4">
                  <span>Loader Detail</span>
                  <div className="flex justify-between mt-2">
                    <div className=" w-[300px] mb-4">
                      <input
                        type="text"
                        value={values.within_range}
                        className="h-11 border text-sm w-full pl-2"
                        placeholder=" Loader with in 5-KiloMeter"
                        name="within_range"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.within_range && touched.within_range && (
                        <>
                          <div className="text-red-700 text-xs">
                            {errors.within_range}
                          </div>
                        </>
                      )}
                    </div>
                    <div className=" w-[300px] mb-4">
                      <input
                        type="text"
                        value={values.out_range}
                        className="h-11 border text-sm w-full pl-2"
                        placeholder=" Loader out of 5-KiloMeter"
                        name="out_range"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.out_range && touched.out_range && (
                        <>
                          <div className="text-red-700 text-xs">
                            {errors.out_range}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/* Payment Start */}
                <div className="w-full mb-4">
                  <section className=" flex justify-between items-center">
                    <div className=" w-[170px] ">
                      <input
                        type="text"
                        className="h-11 border text-sm w-full pl-2"
                        value={paymentData.name}
                        onChange={(e) =>
                          setPaymentData({
                            ...paymentData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Bank"
                      />
                    </div>
                    <div className=" w-[300px]">
                      <input
                        type="text"
                        className="h-11 border text-sm w-full pl-2"
                        placeholder="Transaction No"
                        value={paymentData.trans_id}
                        onChange={(e) =>
                          setPaymentData({
                            ...paymentData,
                            trans_id: e.target.value,
                          })
                        }
                      />
                    </div>
                    <span
                      //   onClick={() => addPaymentMethod()}
                      onClick={() => {
                        setAddPayment([...addPayment, paymentData]);
                        setFieldValue("payement_methods", addPayment);
                        setPaymentData({
                          name: "",
                          trans_id: "",
                        });
                      }}
                      className="inline-flex bg-primary text-white h-10 w-32 justify-center items-center"
                      role="button"
                    >
                      Add Payment
                    </span>
                  </section>
                  {addPaymentError && (
                    <>
                      <div className="text-red-700 text-xs">
                        Add Least Add One Payment Method
                      </div>
                    </>
                  )}
                  {paymentData && (
                    <>
                      <div className="mt-3">
                        {addPayment.map((item, index) => {
                          return (
                            <>
                              <div className="flex justify-between">
                                <div>
                                  <p>{item.name}</p>
                                </div>
                                <div>
                                  <p>{item.trans_id}</p>
                                </div>
                                <div>
                                  <span className="mr-3">Rmove</span>
                                  <span>Edit</span>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
                {/* Payment End */}

                {/* Google Map Location Start */}
                <div className=" w-full overflow-hidden relative h-[400px] mb-4">
                  <GoogleMap
                    address={setDescription}
                    lat={setLocationLat}
                    lng={setLocationLng}
                  />
                </div>
                {googleMapLocationError && (
                  <>
                    <div className="text-red-700 text-xs">
                      Please Provide Supplier Location
                    </div>
                  </>
                )}
                {/* Google map location End */}

                <Button
                  // onClick={() => addSupplierFunction()}
                  type="submit"
                  text="Add Supplier"
                  className="w-full bg-primary text-white h-12"
                />
              </form>
            )}
          </Formik>
        </div>
        {/* -------------------------- */}
      </ModalBox>
    </>
  );
};

export default AddSuppier;
