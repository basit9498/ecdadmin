import React, { Fragment, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../../assets/img/dots.svg";
import AddLoader from "./AddLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  clearLoaderMessage,
  deleteLoader,
  getAllLoader,
  loaderSetData,
} from "../../../store/action/supplierLoader.action";

const Loader = ({ modalOpen, modalHide }) => {
  const dispatch = useDispatch();
  const { supplierId } = useSelector((state) => state.supplier);
  const { loaderList, successMessage } = useSelector((state) => state.loader);
  const [supplierLoader, setSupplierLoader] = useState([]);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    setSupplierLoader(
      loaderList?.filter((item) => item?.supplier == supplierId?._id)
    );
  }, [loaderList]);
  useEffect(() => {
    if (successMessage == "LOADER_DELETE_SCCUESS") {
      dispatch(getAllLoader());
      dispatch(clearLoaderMessage());
    }
  }, [successMessage]);
  return (
    <>
      {/* =============Add Loader Modal Box================== */}
      <AddLoader
        openModal={modalOpen}
        hideModal={modalHide}
        setEditMode={setEditMode}
        editMode={editMode}
      />
      {/* <Button
        className={"bg-black text-white p-3"}
        text="Reload"
        onClick={() => {
          dispatch(getAllLoader());
        }}
      /> */}
      <section className="mt-6">
        <table className="table w-full border-separate rounded-sm organization__table">
          <thead>
            <th className=" pl-5">S.No</th>
            <th>Driver Name</th>
            <th>Email Address</th>
            <th>Vehvile Reg.No</th>
            <th className=" pr-5">Action</th>
          </thead>
          <tbody>
            {supplierLoader?.map((data, index) => {
              return (
                <tr className="rounded-md text-center boxShadow">
                  <td className=" py-3">{index + 1}</td>
                  <td className=" py-3">{data.name}</td>
                  <td className=" py-3">{data.email}</td>
                  <td className=" py-3">{data.registrationNumber}</td>
                  <td className=" py-3">
                    <Menu as="div" className="relative inline-block text-left ">
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
                                text="Edit"
                                className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                onClick={() => {
                                  dispatch(loaderSetData(data));
                                  setEditMode(true);
                                  modalHide(true);
                                }}
                              />
                            </Menu.Item>
                            <Menu.Item>
                              <Button
                                text="Delete"
                                className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                onClick={() => {
                                  dispatch(deleteLoader(data?._id));
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
    </>
  );
};

export default Loader;
