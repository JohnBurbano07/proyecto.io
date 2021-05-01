import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>VENDEDOR</th>
        <th>CLIENTE</th>
        <th>VARIEDAD DE PLANTA</th>
      </tr>
    </thead>
    <tbody>
        {
            props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.VENDEDOR}</td>
                        <td>{user.CLIENTE}</td>
                        <td>{user.VARIEDADDEPLANTA}</td>
                        <td>
                        <button 
                            className="button muted-button"
                            onClick={() => {
                                props.editRow(user)
                            }}
                            >
                            Edit
                        </button>
                        <button 
                            className="button muted-button"
                            onClick={() => props.deleteUser(user.id)}
                            >
                            Delete
                        </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }

      
    </tbody>
  </table>
)

export default UserTable