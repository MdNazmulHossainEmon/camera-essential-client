import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./AddProduct.css";
const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Send data to the server
    const onSubmit = data => {
        fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Product Successfully");
                    // e.target.value = "";
                }
            })
        reset();
    }

    return (
       <div>
        {/* <Header></Header> */}
        <div className='text-center py-5'>
            <h2 className='mb-5 add-title'> Please Add a Product</h2>

            <form className='vh-100' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50 p-2' placeholder='Image Url' {...register("img")} />
                <br />
                <br />
                <input className='w-50 p-2' type='name' placeholder='Name' {...register("name")} />
                <br />
                <br />
                <input className='w-50 p-2' placeholder='Price' type='number'  {...register("price")} />
                <br />
                <br />
                <textarea placeholder='Description' className='w-50 h-25 p-2'  {...register("description")} />
                <br />
                <input className='btn btn-primary mt-4 ' type="submit" value="Add Product" />
            </form>
        </div>
        {/* <Footer></Footer> */}
       </div>
    );
};

export default AddProduct;