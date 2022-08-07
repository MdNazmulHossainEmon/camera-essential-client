import React from 'react';
import { useForm } from "react-hook-form";

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
        <div className='text-center py-5'>
            <h2 className='mb-5'> Please Add a Product</h2>

            <form className='vh-100' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50' placeholder='Image Url' {...register("img")} />
                <br />
                <br />
                <input className='w-50' type='name' placeholder='Name' {...register("name")} />
                <br />
                <br />
                <input className='w-50' placeholder='Price' type='number'  {...register("price")} />
                <br />
                <br />
                <textarea placeholder='Description' className='w-50'  {...register("description")} />
                <br />
                <input className='btn btn-success' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;