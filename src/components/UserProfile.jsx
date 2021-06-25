import React from 'react';
import { Container, Table } from 'react-bootstrap';
import NavBar from './NavBar';

function UserProfile() {

  return (
    <Container className="text-center">
      <NavBar />
      <h1 className="m-5">UserProfile</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Clé</th>
            <th>Valeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>username</td>
            <td>Mark</td>
            
          </tr>
          <tr>
            <td>name</td>
            <td>Jacob</td>
            
          </tr>
          <tr>
            <td>email</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default UserProfile