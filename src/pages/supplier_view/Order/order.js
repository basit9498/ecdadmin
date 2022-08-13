import React, { Fragment, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../../assets/img/dots.svg";
import { useDispatch, useSelector } from "react-redux";
import { getOrderSupplier } from "../../../store/action/order.action";

const Order = () => {
  const dispatch = useDispatch();
  const { supplierId } = useSelector((state) => state.supplier);
  const { isloading, orderSupplier, successMessage, errorMessage } =
    useSelector((state) => state.order);
  const [supplierOrder, setSupplierOrder] = useState([]);

  useEffect(() => {
    dispatch(getOrderSupplier(supplierId._id));
  }, []);

  useEffect(() => {
    setSupplierOrder(orderSupplier);
  }, [orderSupplier]);
  return (
    <>
      <section className="mt-6">
        <table className="table w-full border-separate rounded-sm organization__table">
          <thead>
            <th className=" pl-5">S.No</th>
            <th>Order Price</th>
            <th>Payment Process</th>
            <th>Easy Pisa Id</th>
            <th>Loader Status</th>
            <th>Payment Verify</th>
            <th className=" pr-5">Action</th>
          </thead>
          <tbody>
            {orderSupplier?.map((order, index) => {
              return (
                <tr className="rounded-md text-center boxShadow">
                  <td className=" py-3">{index + 1}</td>
                  <td className=" py-3">{order.totalPrice}</td>
                  <td className=" py-3">
                    {order.paymentInfo.payment_method == "ON_EASY_PISA"
                      ? "ON EASY PISA"
                      : "CASH ON DELIVERY"}
                  </td>
                  <td className=" py-3">
                    {order.paymentInfo.payment_method == "ON_EASY_PISA"
                      ? order.paymentInfo.payment_trans_id
                      : "CASH ON DELIVERY"}
                  </td>
                  <td className=" py-3">
                    {order.order_assign_loader
                      ? "Loader Assign"
                      : "Wait For Loader"}
                  </td>
                  <td className=" py-3">{order.paymentInfo.payment_verify}</td>
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
                                text="Verify Payment"
                                className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                              />
                            </Menu.Item>
                            <Menu.Item>
                              <Button
                                text="Assign Loader"
                                className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                              />
                            </Menu.Item>
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

export default Order;
