import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../assets/img/dots.svg";
import Cross from "../../assets/img/cross.svg";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import ModalBox from "../../components/ModalBox";
import { useNavigate } from "react-router-dom";
import AddSuppier from "./AddSuppier";
import GoogleMap from "./GoogleMap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSuppier,
  getAllSupplier,
  setSupplierId,
  supplierClearMessages,
} from "../../store/action/supplier.action";
import { getAllLoader } from "../../store/action/supplierLoader.action";

const Index = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [supplier, setSupplier] = useState([]);
  const [editMode, setEditMode] = useState({
    status: false,
    id: null,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const { isLoading, supplierList, supplierSuccessMessage } = useSelector(
    (state) => state.supplier
  );
  useEffect(() => {
    dispatch(getAllSupplier());
    dispatch(getAllLoader());
  }, []);

  useEffect(() => {
    setSupplier(supplierList);
  }, [supplierList]);
  useEffect(() => {
    if (supplierSuccessMessage == "SUPPLIER_DEL_SCCCESS") {
      dispatch(getAllSupplier());
      dispatch(supplierClearMessages());
    }
  }, [supplierSuccessMessage]);
  return (
    <>
      {/* ==============Add supplier Modal=========== */}
      <AddSuppier
        modalOpen={modalOpen}
        modalHide={setModalOpen}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Layout>
        <section className=" flex items-center justify-between">
          <Heading text="Supplier List" />
          <Button
            text="Add Supplier"
            onClick={() => {
              setModalOpen(true);
            }}
            className="py-3 px-4 bg-primary text-white  rounded-md"
          />
        </section>
        <section className="mt-5">
          <table className="table w-full border-separate rounded-sm organization__table">
            <thead>
              <th className=" pl-5">S.No</th>
              <th>Supplier</th>
              <th>Area</th>
              <th className=" pr-5">Action</th>
            </thead>
            <tbody>
              {supplier?.map((data, index) => {
                return (
                  <tr className="rounded-md text-center boxShadow">
                    <td className=" py-3">{index + 1}</td>
                    <td className=" py-3">{data?.supplierName}</td>
                    <td className=" py-3">{data?.area}</td>
                    <td className=" py-3">
                      <Menu
                        as="div"
                        className="relative inline-block text-left "
                      >
                        <div>
                          <Menu.Button className="">
                            <img src={Dots} />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 bg-white rounded-md shadow border z-20">
                            <div className="py-1">
                              <Menu.Item>
                                <Button
                                  onClick={() => {
                                    dispatch(setSupplierId(data));
                                    navigate("/supplierview");
                                  }}
                                  text="View"
                                  className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                />
                              </Menu.Item>
                              <Menu.Item>
                                <Button
                                  text="Edit"
                                  className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                  onClick={() => {
                                    setEditMode({
                                      status: true,
                                      id: data?._id,
                                    });
                                    dispatch(setSupplierId(data));
                                    setModalOpen(true);
                                  }}
                                />
                              </Menu.Item>
                              <Menu.Item>
                                <Button
                                  text="Delete"
                                  className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                  onClick={() => {
                                    dispatch(deleteSuppier(data?._id));
                                  }}
                                />
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        {/* <div className="w-full">
                    <GoogleMap />
                </div> */}
      </Layout>
    </>
  );
};

export default Index;
