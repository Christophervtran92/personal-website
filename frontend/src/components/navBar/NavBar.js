import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './NavBar.css';

export default function NavBar () {
    return (
      <Navbar
        className='color-nav'
        variant='light'
        expand='lg'
        sticky="top"
        style={{height: "65px"}}
        >
        <NavLink 
          exact to='/' 
          className='navbar-brand' 
          activeClassName='activeNav'>
            Christopher T.
          </NavLink>
          <Navbar.Toggle aria-controls='navLinks' />
          <Navbar.Collapse id='navLinks' style={{marginLeft: "25px", fontFamily: "quicksand"}}>
            <Nav className='ml-auto'>
              <NavLink
                exact
                to='/'
                className='nav-link'
                activeClassName='activeNav'
                style={({isActive}) => ({
                  fontWeight: isActive? "bold" : "normal",
                  marginLeft: "50px",
                  borderBottom: isActive? "2px solid black" : "0px"
                })}
                >
                Home
              </NavLink>
              <NavLink
                exact
                to='/about'
                className='nav-link'
                activeClassName='activeNav'
                style={({isActive}) => ({
                  fontWeight: isActive? "bold" : "normal",
                  marginLeft: "50px",
                  borderBottom: isActive? "2px solid black" : "0px"
                })}
                >
                About
              </NavLink>
              <NavLink
                exact
                to='/works'
                className='nav-link'
                activeClassName='activeNav'
                style={({isActive}) => ({
                  fontWeight: isActive? "bold" : "normal",
                  marginLeft: "50px",
                  borderBottom: isActive? "2px solid black" : "0px"
                })}
                >
                My Works
              </NavLink>
              <NavLink
                exact
                to='/games'
                className='nav-link'
                activeClassName='activeNav'
                style={({isActive}) => ({
                  fontWeight: isActive? "bold" : "normal",
                  marginLeft: "50px",
                  borderBottom: isActive? "2px solid black" : "0px"
                })}
                >
                Games List
              </NavLink>
              <NavDropdown 
               title="Links" 
               id="navbarScrollingDropdown"
               style={{marginLeft: "50px"}}>
                <NavDropdown.Item href="https://github.com/Christophervtran92" 
                 target="_blank"
                 >
                  Github
                </NavDropdown.Item>
                <NavDropdown.Item href="https://linkedin.com/in/tran-christopher" target="_blank">LinkedIn</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }