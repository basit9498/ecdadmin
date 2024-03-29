import React, { useState } from 'react'
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'
import ModalBox from "../../../components/ModalBox"
import Cross from "../../../assets/img/cross.svg"
import CaretDown from "../../../assets/img/caret-down.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addSupplierProduct } from '../../../store/action/supplierProduct.action'
import { Formik } from 'formik'

const AddProduct = ({ openModal, hideModal, callBack }) => {

    const dispatch = useDispatch()
    const sprod = useSelector((state) => state.supplierProduct)

    // console.log(sprod)





    const { supplierId } = useSelector((state) => state.supplier)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [fileData, setFileData] = useState()
    const [category, setcategory] = useState('')
    const [stock, setStock] = useState('')


    // console.log(supplierId?._id)
    // base 64 
    const getBase64 = file => {
        return new Promise(resolve => {

            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };



    const handleClick = async () => {
        const payload = {
            'name': name,
            'description': description,
            'price': price,
            'image': fileData,
            'category': category,
            'supplier': supplierId?._id,
            'Stock': stock,
        }
        console.log("payload")
        dispatch(addSupplierProduct(payload))
        // console.log(errorMessage)

    }


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
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='h-11 border text-sm w-full pl-2' placeholder=' name' />
                    </div>
                    <div className='w-[300px] mb-4'>
                        <label className='border inline-flex h-11 justify-end w-full cursor-pointer'>
                            <input
                                onChange={(event) => {
                                    // const reader = new FileReader()

                                    let file = event.target.files[0]
                                    getBase64(file).then(data => {

                                        setFileData(data)

                                    }).catch(error => {
                                        console.log(error)
                                    })
                                }}
                                type='file'

                                className='hidden' />

                            <span className='h-full w-36 text-center py-1 inline-flex text-white text-sm justify-center items-center bg-primary'>Choose Image</span>
                        </label>
                    </div>
                    <div className=' w-[300px] mb-4 relative'>
                        <select onChange={(e) => setcategory(e.target.value)} className='h-11 text-gray-400 border text-sm w-full pl-2'>
                            <option>select Category</option>
                            <option value='steel'>Steel</option>
                            <option value='brick'>brick</option>
                        </select>
                        <img src={CaretDown} className='absolute top-5 right-3' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} className='h-11 border text-sm w-full pl-2' placeholder='Price' />
                    </div>
                    <div className=' w-[300px] mb-4'>
                        <input type='text' value={stock} onChange={(e) => setStock(e.target.value)} className='h-11 border text-sm w-full pl-2' placeholder='Stock' />
                    </div>
                    <div className=' w-full mb-4'>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='h-20 border resize-none text-sm w-full p-2' placeholder=' Description' />
                    </div>
                    <div className='w-full mb-4'>
                        <Button
                            onClick={() => handleClick()}
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