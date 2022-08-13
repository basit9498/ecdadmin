import React, { Fragment, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../../assets/img/dots.svg";
import AddProduct from "./AddProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  getSupplierProduct,
  supplierProductDelete,
  supplierProjectClearMessages,
} from "../../../store/action/supplierProduct.action";

const Product = ({ modalOpen, modalHide }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.supplier);
  const { supplierProductList, successMessage } = useSelector(
    (state) => state.supplierProduct
  );
  const [getAllProducts, setGetAllProducts] = useState([]);
  useEffect(() => {
    dispatch(getSupplierProduct(state.supplierId._id));
  }, []);

  useEffect(() => {
    setGetAllProducts(supplierProductList);
  }, [supplierProductList]);

  useEffect(() => {
    if (successMessage == "SUPPLIER_PRODUCT_DEL_SCCCESS") {
      dispatch(getSupplierProduct(state.supplierId._id));
      dispatch(supplierProjectClearMessages());
    }
  }, [successMessage]);
  return (
    <>
      <AddProduct openModal={modalOpen} hideModal={modalHide} />

      <section className="mt-6">
        <table className="table w-full border-separate rounded-sm organization__table">
          <thead>
            <th className=" pl-5">S.No</th>
            <th>Product Name</th>
            <th>Qauntity</th>
            <th>Stock</th>
            <th>category</th>
            <th>Price</th>
            <th className=" pr-5">Action</th>
          </thead>
          <tbody>
            {getAllProducts?.map((ele, index) => {
              return (
                <tr className="rounded-md text-center boxShadow">
                  <td className=" py-3">{index + 1}</td>
                  <td className=" py-3 flex flex-col   items-center gap-x-3">
                    <img
                      src={ele?.images[0].url}
                      alt=""
                      className="h-10 w-10 object-cover"
                    />
                    <span>{ele?.name}</span>
                  </td>
                  <td className=" py-3">Qauntity</td>
                  <td className=" py-3">{ele?.Stock}</td>
                  <td className=" py-3">{ele?.category}</td>
                  <td className=" py-3">{ele?.price}</td>
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
                              />
                            </Menu.Item>
                            <Menu.Item>
                              <Button
                                text="Delete"
                                className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                onClick={() => {
                                  dispatch(supplierProductDelete(ele._id));
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

export default Product;
