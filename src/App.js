import React, {useState} from 'react';
import UserTable from './components/UserTable';
import InsertarUsuario from './components/InsetarUsuario';
import Editar from './components/Editar';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Agregar usuarios
  const usersData = [
   { id: uuidv4(), VENDEDOR: ' CAMILA', CLIENTE: ' Andres', VARIEDADDEPLANTA: 'CLAVEL' },
    { id: uuidv4(), VENDEDOR: ' ALFONSO CORDOBA', CLIENTE: ' SANTIAGO', VARIEDADDEPLANTA: 'ROSAS' },
    { id: uuidv4(), VENDEDOR: ' LINA BERNAL', CLIENTE: ' SEBASTIAN', VARIEDADDEPLANTA: 'MARGARITAS' },
    { id: uuidv4(), VENDEDOR: ' ANDREA RODRIGUEZ', CLIENTE: ' LAURA', VARIEDADDEPLANTA: 'ORQUIDIAS' },
    { id: uuidv4(), VENDEDOR: ' CAMILA DIAZ', CLIENTE: ' LINA', VARIEDADDEPLANTA: 'GIRASOL' },

  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar usuario
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Editar usuario
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, CLIENTE: '', VENDEDOR: '', VARIEDADDEPLANTA : '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, VENDEDOR: user.VENDEDOR, CLIENTE: user.CLIENTE, VARIEDADDEPLANTA: user.VARIEDADDEPLANTA,})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>VENTA DE PLANTAS Camila Córdoba</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <Editar
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}   
            />
          </div>
        ) : (
          <div>
            <h2>FORMULARIO DE VENTA</h2>
            <InsertarUsuario addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>REGISTROS</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
  