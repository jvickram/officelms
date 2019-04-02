import React from 'react'

export const Log = (props) => {
    const user = this.props.users.map((user) => {
        return(
            <ul key={user.id}>
          <h6>User Details</h6>
          <li>User id: <u>{user.id}</u></li>
          <li>Email: <u>{user.email}</u></li>
          <li>Password: <u>{user.pass}</u></li>
          <li>Full Name: <u>{user.firstName} {user.lastName}</u></li>
          <hr/>
        </ul>
        )       
    })
  return (
    <div>
      {user}
    </div>
  )
}
