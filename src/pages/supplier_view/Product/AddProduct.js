import React, { useState } from 'react'
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'
import ModalBox from "../../../components/ModalBox"
import Cross from "../../../assets/img/cross.svg"
import CaretDown from "../../../assets/img/caret-down.svg"

const AddProduct = ({ openModal, hideModal, callBack }) => {


    return (
        <>
            <ModalBox open={openModal} hide={hideModal} className='w-[700px] p-6'>
                <section className='flex  justify-between items-center'>
                    <Heading text='Add Product' />
                    <Button
                        img={Cross}
                        onClick={() => { hideModal(false) }}
                        imgClass="h-4"
                    />
                </section>
                <from className='mt-4 flex justify-between flex-wrap'>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder=' name' />
                    </div>
                    <div className='w-[300px] mb-4'>
                        <label className='border inline-flex h-11 justify-end w-full cursor-pointer'>
                            <input type='file' className='hidden' />
                            <span className='h-full w-36 text-center py-1 inline-flex text-white text-sm justify-center items-center bg-primary'>Choose Image</span>
                        </label>
                    </div>
                    <div className=' w-[300px] mb-4 relative'>
                        <select className='h-11 text-gray-400 border text-sm w-full pl-2'>
                            <option>select Category</option>
                            <option value=''>Car</option>
                            <option value=''>Truck</option>
                        </select>
                        <img src={CaretDown} className='absolute top-5 right-3' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Price' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Stock' />
                    </div>
                    <div className=' w-full mb-4'>
                        <textarea className='h-20 border resize-none text-sm w-full p-2' placeholder=' Description' />
                    </div>
                    <div className='w-full mb-4'>
                        <Button
                            className='w-full h-12 bg-primary text-white'
                            text='Add Product'
                        />
                    </div>
                </from>
            </ModalBox>
        </>
    )
}

export default AddProduct