import React, { useState } from 'react'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import ModalBox from '../../components/ModalBox'
import Cross from "../../assets/img/cross.svg";
import Select from 'react-select';
import CaretDown from "../../assets/img/caret-down.svg"
import GoogleMap from './GoogleMap';


const AddSuppier = ({ modalOpen, modalHide }) => {

    const [data, setData] = useState('')
    const category = [
        { label: 'Qasim Ali', value: "Qasim Ali", },
        { label: 'Aamir', value: "Aamir", }

    ]

    return (
        <>
            <ModalBox open={modalOpen} hide={modalHide} className='w-[700px]  p-6'>
                <section className="flex justify-between  items-center">
                    <Heading text='Add Supplier' />
                    <Button
                        img={Cross}
                        onClick={() => { modalHide(false) }}
                        imgClass="h-4 "
                        className='ml-auto block w-max'
                    />
                </section>
                <from className='mt-4 flex justify-between flex-wrap'>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Full name' />
                    </div>
                    <div className='w-[300px] h-11 select_autocomplete border  relative'>
                        <Select
                            defaultValue={data}
                            placeholder="Category"
                            onChange={setData}
                            isClearable={false}
                            isMulti
                            options={category}
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                        />
                        <img src={CaretDown} className='absolute top-[19px] right-2' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Country' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='City' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' className='h-11 border text-sm w-full pl-2' placeholder='Address' />
                    </div>
                    <div className=' w-full overflow-hidden relative h-[400px] mb-4'>
                        <GoogleMap />

                    </div>
                    <Button
                        text='Add Supplier'
                        className='w-full bg-primary text-white h-12'
                    />
                </from>
            </ModalBox>
        </>
    )
}

export default AddSuppier