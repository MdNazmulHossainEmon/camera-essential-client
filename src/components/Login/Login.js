import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { NavLink } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Spinner } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Login.css"
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
  const { loginUser, isLoading, user } = useAuth();
  const [loginData, setLoginData] = useState({});
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useNavigate();

  const handleLogin = () => {
    signInUsingGoogle(location, history);
  }

  // handle OnChange 
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  // handle registration form
  const handleLoginSbumit = (e) => {
    e.preventDefault();
    // console.log("form is clicked")
    loginUser(loginData.email, loginData.password, location, history)

  }

  return (
    <div>
      <Header></Header>
      <div className='py-5 text-center'>
        <h2 className='mb-5 login-title'>Please Login</h2>

        <Form onSubmit={handleLoginSbumit} className='w-50 text-center mx-auto'>


          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail" >
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='email' onChange={handleOnChange} type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control name='password' onChange={handleOnChange} type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 8, offset: 2 }}>
              <Button className='mt-3' type="submit" variant='primary'>Login</Button>
            </Col>
          </Form.Group>

          <NavLink
            style={{ textDecoration: "none" }}
            to='/register'>
            <p>New User? Please Register</p>
          </NavLink>

          {isLoading && <div className='text-center mb-5'>
            <Spinner animation="border" />
          </div>}

          {user?.email && <Alert className='w-50 mx-auto' variant="success">

            User Login susccessfully
          </Alert>}

        </Form>

        <Button onClick={handleLogin} variant="primary">Google SignIn</Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;