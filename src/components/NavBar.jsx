import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navbar-brand" to="/">Login</Link>
          <Link className="nav-link active" to="/user-list">UserList</Link>
          <Link className="nav-link active" to="/user-Profile">UserProfile</Link>

        </Nav>
      </Navbar>
    )
}

export default NavBar