import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./MakeAdmin.css";

const MakeAdmin = () => {
    const [email, setEmail] = useState(" ");
    
    const handleOnBlur = (e) =>{
    setEmail(e.target.value)
    }

  const handleAdminSubmit = e =>{
    
    e.preventDefault();
    const user = {email};

    fetch('',{
        method : 'PUT',
        headers : {
            "content-type ": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data => console.log(data))
  }

    return (
        <div>
            {/* <Header></Header> */}
           
            <div className='py-5 text-center vh-100'>

            <h2 className='mb-5'>Please Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>

<input 
className='w-50 p-1 ' 
type="email"
 placeholder='Email'
 onBlur={handleOnBlur}
 />
<br />
<br />
           <Button>Make Admin</Button>
           
            </form>

        </div>

        {/* <Footer></Footer> */}
        </div>
        
    );
};

export default MakeAdmin;