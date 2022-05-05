import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Navbar,Container, Nav, NavDropdown, Card } from 'react-bootstrap';

function App() {
  let nav_st = {background:"#E0FACC", fontWeight: 'bold'}
  return (
    <div className="App">
       <Navbar variant="light" fixed='top' style={nav_st}>
          <Container>
          <Navbar.Brand href="#home">
          <img src = "\img\logo_cap2.png" alt={logo} width = '100' height= '60' marginRight = '20px' textAlign = 'center'/>
          WildEarth</Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link href="#Animal">Animal</Nav.Link>
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#Profile">Profile</Nav.Link>
            <Nav.Link href="#Log-in">Log-in</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br></br>
    </div>
  );
}

export default App;
