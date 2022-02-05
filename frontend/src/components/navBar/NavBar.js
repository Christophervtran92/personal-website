import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
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
          {/*<i class="fas fa-home"></i>*/} Christopher T.
          </NavLink>
          <Navbar.Toggle aria-controls='navLinks' />
          <Navbar.Collapse id='navLinks' style={{marginLeft: "25px"}}>
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
            </Nav>
          </Navbar.Collapse>
          {/*</Container>*/}
      </Navbar>
    )
  }

  /*
            <NavLink exact to='/' className='navbar-brand' activeClassName='activeNav' style={{marginLeft: "10px", fontWeight: "bolder"}}>
          <i class="fas fa-home"></i> Homepage
          </NavLink>
  */