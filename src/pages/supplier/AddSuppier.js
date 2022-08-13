import React, { useState } from 'react'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import ModalBox from '../../components/ModalBox'
import Cross from "../../assets/img/cross.svg";
import Select from 'react-select';
import CaretDown from "../../assets/img/caret-down.svg"
import GoogleMap from './GoogleMap';
import { useDispatch, useSelector } from 'react-redux';
import { supplierAdd } from '../../store/action/supplier.action';

const AddSuppier = ({ modalOpen, modalHide }) => {

    const [data1, setData1] = useState('')
    const [supplierName, setsupplierName] = useState('')
    const [city, setCity] = useState('')
    const [category, setCategory] = useState()
    const [country, setCountry] = useState('')
    const [locationLat, setLocationLat] = useState('')
    const [locationLng, setLocationLng] = useState('')
    const [description, setDescription] = useState('')

    const categoryList = [
        { label: 'Industrial services', value: "industrial services", },
        { label: 'Raw materials', value: "raw materials", }
    ]

    const dispatch = useDispatch()

    const { isLoading, data } = useSelector((state) => state.supplier)

    // console.log(data)

    const addSupplierFunction = () => {
        const categoryData = category.map((ele) => ele?.value)
        const payload = {
            'supplierName': supplierName,
            'city': city,
            'category': categoryData,
            'country': country,
            // "area": description,
            "area": "Akora Khattak",
            'address': description,
            "location": {
                "lat": locationLat,
                "lng": locationLng,
                "description": description
            },
        }
        console.log(payload)
        dispatch(supplierAdd(payload))

    }
    // console.log(errorMessage)

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
                        <input type='text' value={supplierName} onChange={(e) => setsupplierName(e.target.value)} className='h-11 border text-sm w-full pl-2' placeholder='Full name' />
                    </div>
                    <div className='w-[300px] h-11 select_autocomplete border  relative'>
                        <Select
                            defaultValue={category}
                            placeholder="Category"
                            onChange={setCategory}
                            isClearable={false}
                            isMulti
                            options={categoryList}
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                        />
                        <img src={CaretDown} className='absolute top-[19px] right-2' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' value={country} onChange={(e) => setCountry(e.target.value)} className='h-11 border text-sm w-full pl-2' placeholder='Country' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' value={city} onChange={(e) => setCity(e.target.value)} className='h-11 border text-sm w-full pl-2' placeholder='City' />
                    </div>
                    {/* <div className=' w-[300px] mb-4'>
                        <input type='text' value={address} onChange={(e)=> setadd} className='h-11 border text-sm w-full pl-2' placeholder='Address' />
                    </div> */}
                    <div className=' w-full overflow-hidden relative h-[400px] mb-4'>
                        <GoogleMap
                            address={setDescription}
                            lat={setLocationLat}
                            lng={setLocationLng}
                        />

                    </div>
                    <Button
                        onClick={() => addSupplierFunction()}
                        text='Add Supplier'
                        className='w-full bg-primary text-white h-12'
                    />
                </from>
            </ModalBox>
        </>
    )
}

export default AddSuppier