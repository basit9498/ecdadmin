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
                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                        price: '',
                        fileData: '',
                        category: '',
                        stock: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        const payload = {
                            'name': values.name,
                            'description': values.description,
                            'price': values.price,
                            'image': fileData,
                            'category': values.category,
                            'supplier': supplierId?._id,
                            'Stock': values.stock,
                        }
                        addSupplierProduct(payload)
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (

                        <from className='mt-4 flex justify-between flex-wrap'>
                            <div className=' w-[300px] mb-4'>
                                <input type='text'
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    className='h-11 border text-sm w-full pl-2' placeholder=' name' />
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
                                <select
                                    onChange={handleChange('category')}
                                    onBlur={handleBlur('category')}
                                    value={values.category}
                                    className='h-11 text-gray-400 border text-sm w-full pl-2'>
                                    <option>select Category</option>
                                    <option value='steel'>Steel</option>
                                    <option value='brick'>brick</option>
                                </select>
                                <img src={CaretDown} className='absolute top-5 right-3' />
                            </div>
                            <div className=' w-[300px] mb-4'>
                                <input
                                    onChange={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.price}
                                    type='text'
                                    className='h-11 border text-sm w-full pl-2' placeholder='Price' />
                            </div>
                            <div className=' w-[300px] mb-4'>
                                <input
                                    type='text'
                                    value={values.stock}
                                    onChange={handleChange('stock')}
                                    onBlur={handleBlur('stock')}
                                    className='h-11 border text-sm w-full pl-2' placeholder='Stock' />
                            </div>
                            <div className=' w-full mb-4'>
                                <textarea
                                    value={values.description}
                                    onChange={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    className='h-20 border resize-none text-sm w-full p-2' placeholder=' Description' />
                            </div>
                            <div className='w-full mb-4'>
                                <Button
                                    onClick={handleSubmit}
                                    className='w-full h-12 bg-primary text-white'
                                    text='Add Product'
                                />
                            </div>
                        </from>
                    )}

                </Formik>
            </ModalBox>
        </>
    )
}

export default AddProduct