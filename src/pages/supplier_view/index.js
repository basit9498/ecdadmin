import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../assets/img/dots.svg";
import Cross from "../../assets/img/cross.svg";
import Layout from "../../components/Layout"
import Button from "../../components/Button"
import Heading from '../../components/Heading'
import ModalBox from '../../components/ModalBox'
import Loader from "./Loader/loader";
import Product from "./Product/product";
import Order from "./Order/order";


const Index = () => {
    const [tabs, setTabs] = useState('loader')
    const [openLoaderModal, setOpenLoaderModal] = useState(false)
    const [ProductModal, setProductModal] = useState(false)

    return (
        <>

            <Layout>
                <section className="flex justify-between items-center">
                    <Heading text='Supplier Name' />

                    {tabs === 'loader' && <Button
                        onClick={() => setOpenLoaderModal(true)}
                        text='Add Loader'
                        className='bg-primary text-white px-4 py-3 block w-max ml-auto'
                    />}
                    {tabs === 'product' && <Button
                        onClick={() => setProductModal(true)}
                        text='Add Product'
                        className='bg-primary text-white px-4 py-3 block w-max ml-auto'
                    />}
                    {tabs === 'order' && <Button
                        text='Add Order'
                        className='bg-primary text-white px-4 py-3 block w-max ml-auto'
                    />}
                </section>
                <section className="mt-2 flex items-center space-x-2">
                    <Button
                        text='Loader'
                        onClick={() => setTabs('loader')}
                        className={`${tabs === 'loader' && 'border-b-2 border-primary text-primary font-semibold'} px-6 py-3 `}
                    />
                    <Button
                        text='Product'
                        onClick={() => setTabs('product')}
                        className={`${tabs === 'product' && 'border-b-2 border-primary text-primary font-semibold'} px-6 py-3 `}
                    />
                    <Button
                        text='Order'
                        onClick={() => setTabs('order')}
                        className={`${tabs === 'order' && 'border-b-2 border-primary text-primary font-semibold'} px-6 py-3 `}
                    />
                </section>
                <section className="mt-6">
                    {tabs === 'loader' &&
                        <Loader
                            modalOpen={openLoaderModal}
                            modalHide={setOpenLoaderModal} />}
                    {tabs === 'product' &&
                        <Product
                            modalOpen={ProductModal}
                            modalHide={setProductModal}
                        />}
                    {tabs === 'order' && <Order />}
                </section>
            </Layout>
        </>
    )
}

export default Index