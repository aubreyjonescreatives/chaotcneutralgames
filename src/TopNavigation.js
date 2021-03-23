import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/cardStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './assets/images/chaoticneutralgameslogo.png'



function TopNavigation() {
 


return (
  
  <Navbar bg="light" variant="light" fixed="top" className="nav-container">
   <figure><img src={logo}></img></figure>
    <Navbar.Brand href="#home">Chaotic Neutral Games</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#yourgames">Your Games</Nav.Link>
      <Nav.Link href="#yourstats">Your Stats</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-primary">Register</Button>
    </Form>
    <Form inline>
      <Button variant="outline-primary">Login</Button>
    </Form>
      <Nav.Link href="#settings">Settings</Nav.Link>
  </Navbar> 

)}


export default TopNavigation; 
  