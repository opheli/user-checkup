import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Table } from 'react-bootstrap'
import User from './User'

function UserList() {

  const [infoUser, setInfoUser] = useState([])

  useEffect(async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const userRes = await res.json()
      setInfoUser(userRes)
    } catch (err) {
      console.error(err)
    }
  }, [setInfoUser])


  return (
    <div className="text-center">
      <NavBar />
      <h1>UserList</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {infoUser.map((infoUser, index) => {
            return <User key={index} infoUser={infoUser} />
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default UserList