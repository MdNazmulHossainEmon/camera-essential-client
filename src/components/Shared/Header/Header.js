import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const Header = () => {

    const { user, logOut } = useAuth();
    let activeStyle = {
        color: "springgreen",
        fontWeight: "bold"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand className='header-name'>

                        <Link to="/home" className='m-0'>
                        <h2>Camera Essential</h2>
                        </Link>
                        
                        </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto d-flex align-items-center">

                            <NavLink
                                to="/home"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            > Home
                            </NavLink>

                            <NavLink
                                to="/explore"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            > Explore
                            </NavLink>

                            <NavLink
                                to="/purchase"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            > Purchase
                            </NavLink>

                            <NavLink
                                to="/login"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            > Login
                            </NavLink>


                            {user?.email && <Button className='ms-3' onClick={logOut} variant='danger'>LogOut</Button>}

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;