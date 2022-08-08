import React from 'react'
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'
import ModalBox from "../../../components/ModalBox"
import Cross from "../../../assets/img/cross.svg"
import CaretDown from "../../../assets/img/caret-down.svg"


const AddLoader = ({ openModal, hideModal, callBack }) => {
    return (
        <>
            <ModalBox open={openModal} hide={hideModal} className='w-[700px] p-6'>
                <section className='flex  justify-between items-center'>
                    <Heading text='Add Loader' />
                    <Button
                        img={Cross}
                        onClick={() => { hideModal(false) }}
                        imgClass="h-4"
                    />
                </section>
                <from className='mt-4 flex justify-between flex-wrap'>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Full name' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='email' className='h-11 border text-sm w-full pl-2' placeholder='Enter your email' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='password' className='h-11 border text-sm w-full pl-2' placeholder='Password' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Contect number' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Address' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Vehicle Reg.No' />
                    </div>
                    <div className=' w-[300px] mb-4 relative'>
                        <select className='h-11 border text-sm w-full pl-2'>
                            <option>select type</option>
                            <option value=''>Car</option>
                            <option value=''>Truck</option>
                        </select>
                        <img src={CaretDown} className='absolute top-5 right-3' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='5-KM price' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Out of 5-KM price' />
                    </div>
                    <div className='w-full mb-4'>
                        <Button
                            className='w-full h-12 bg-primary text-white'
                            text='Add Loader'
                        />
                    </div>
                </from>
            </ModalBox>
        </>
    )
}

export default AddLoader