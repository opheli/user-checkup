import React from 'react';


function User(props) {
const { infoUser } = props

  return (
    <tr>
      <td>{infoUser.id}</td>
      <td>{infoUser.username}</td>
      <td>{infoUser.name}</td>
      <td>{infoUser.email}</td>
    </tr>
  )
}

export default User