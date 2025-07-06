
import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';


function App() {
  let [showForm, setShowForm] = useState(false);

  function addUserHandler() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }

  function onCreateUser(user) {
    fetch(
      'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((user) => {
        console.log(user)
      })

  }

  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal'>Get Users</button>
      </div>
      <UserDetails></UserDetails>
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser}></UserForm>}
    </div>
  );
}

export default App;
