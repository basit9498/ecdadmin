import React, { Fragment, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../../assets/img/dots.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderSupplier,
  loaderAssignRedxSetData,
  verifyOrderPayment,
} from "../../../store/action/order.action";
import ModalBox from "../../../components/ModalBox";
import orderService from "../../../services/order.service";

const Order = () => {
  const dispatch = useDispatch();
  const { supplierId } = useSelector((state) => state.supplier);
  const {
    isloading,
    orderSupplier,
    successMessage,
    errorMessage,
    orderAssign,
  } = useSelector((state) => state.order);

  const { loaderList } = useSelector((state) => state.loader);
  const [supplierOrder, setSupplierOrder] = useState([]);
  const [supplierLoader, setSupplierLoader] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getOrderSupplier(supplierId._id));
  }, []);

  useEffect(() => {
    setSupplierOrder(orderSupplier);
  }, [orderSupplier]);

  useEffect(() => {
    setSupplierLoader(
      loaderList.filter((item) => item?.supplier == supplierId?._id)
    );
  }, [loaderList]);
  return (
    <>
      <ModalBox open={modalOpen} hide={setModalOpen} className="w-[700px] p-6">
        <Button
          className={"bg-secondry p-2"}
          text={"Close"}
          onClick={() => {
            setModalOpen(false);
          }}
        />
        <div className="border-t my-2 py-4">
          <ul>
            {supplierLoader?.map((data) => {
              return (
                <>
                  <li className="flex items-center justify-between">
                    <h6>{data?.registrationNumber}</h6>{" "}
                    <Button
                      className={"bg-primary text-white p-3"}
                      text={"Assign Loader"}
                      onClick={async () => {
                        const setData = { ...orderAssign, loaderId: data._id };
                        console.log("setData", setData);
                        const response = await orderService.setOrderLoaderPick(
                          setData
                        );
                        console.log("res", response.data.success);
                      }}
                    />
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </ModalBox>
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
                    {order.order_assign_loader == "YES"
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-60 bg-white rounded-md shadow border z-20">
                          <div className="py-1">
                            <div className="border-b p-2">
                              <p>Loader & Payment Option</p>
                            </div>

                            {order.paymentInfo.payment_method ==
                            "ON_EASY_PISA" ? (
                              <>
                                {order.paymentInfo.payment_verify ==
                                  "ON_PROCESS" && (
                                  <Menu.Item>
                                    <Button
                                      text="Verify Payment"
                                      className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                      onClick={() => {
                                        dispatch(verifyOrderPayment(order._id));
                                      }}
                                    />
                                  </Menu.Item>
                                )}
                              </>
                            ) : (
                              <>
                                {order.order_assign_loader == "NO" && (
                                  <Menu.Item>
                                    <Button
                                      text="Assign Loader"
                                      className="block w-full text-left py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                                      onClick={() => {
                                        setModalOpen(true);
                                        const data = {
                                          orderId: order._id,
                                          // loaderId: loaderData._id,
                                          userId: order.user,
                                          order_status: "ON_WAITING",
                                          origin: {
                                            lat: supplierId.location.lat,
                                            lng: supplierId.location.lng,
                                            description:
                                              supplierId.location.description,
                                          },
                                          destination: {
                                            lat: order.shippingInfo.lat,
                                            lng: order.shippingInfo.lng,
                                            description:
                                              order.shippingInfo.address,
                                          },
                                        };
                                        dispatch(loaderAssignRedxSetData(data));
                                        // const response = await orderLoaderService.setOrderLoaderPick(data);
                                        // console.log("res", response.data.success);
                                      }}
                                    />
                                  </Menu.Item>
                                )}
                              </>
                            )}

                            {/* <Menu.Item>
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
                            </Menu.Item> */}
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
