import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Alert from 'react-bootstrap/Alert';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Register.css";
// import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user } = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const handleRegistration = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        // console.log("form is clicked")

    }
    // handle onBlur 
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    return (
        <div>
            <Header></Header>
            <div className='py-5 text-center'>
            <h2 className='mb-5 register-title'>Please Register</h2>
            {!isLoading && <Form onSubmit={handleRegistration} className='w-50 text-center mx-auto'>
           
            <Form.Group as={Row} className="mb-4" controlId="formHorizontalName" >
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control name='name' onBlur={handleOnBlur} type="text" placeholder="Name" />
          </Col>
        </Form.Group>


                <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail" >
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name='email' onBlur={handleOnBlur} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                {/* password */}
                <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name='password' onBlur={handleOnBlur} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                {/* confirm password */}
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword2">
                    <Form.Label column sm={2}>
                        Confirm Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name='password2' onBlur={handleOnBlur} type="password" placeholder="Confirm Password" />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Button type="submit" variant='primary'>Register</Button>
                    </Col>
                </Form.Group>

                <NavLink
                    style={{ textDecoration: "none" }}
                    to='/login'>
                    <p>Already Registered? Please Login</p>

                </NavLink>
               

            </Form>}

          
            {isLoading && <div className='text-center mb-5'>
                <Spinner animation="border" />
            </div>}
            
            {user?.email && <Alert className='w-50 mx-auto' variant="success">

                User created susccessfully
            </Alert>}

            {/* {authError && <p className='text-danger'>{authError}</p>

            } */}
            


        </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;