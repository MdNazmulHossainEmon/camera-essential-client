import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data=>{
        // console.log(data)
        fetch(`http://localhost:5000/reviews`,{
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=> {
            // console.log(result);
            if (result.insertedId) {
                alert("Review Added Successfully");
                // e.target.value = "";
            }
        } )
        reset();
    }

    return (
        <div className="text-center py-5">
           <h2 className='mb-4'>Your Review</h2>
           <form onSubmit={handleSubmit(onSubmit)} >
      <input className='w-50' type='name' placeholder='Name' {...register("name")} />
      <br />
      <br />
      <input className='w-50' type="text" placeholder='Profession'   {...register("profession")} />
      <br /> <br />
      <input className='w-50' placeholder='Rating' type='number'  {...register("rating",{min:0,max:5})} />
      <br />
      <br />
      <textarea placeholder='Description' className='w-50'  {...register("description")} />
      <br />
      
      <input className='btn btn-danger' type="submit" />
    </form> 
        </div>
    );
};

export default Review;