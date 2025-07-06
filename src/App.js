
import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';


function App() {
  let [showForm, setShowForm] = useState(false);

  function addUserHandler() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }

  function onCreateUser(user) {
    //Using JS fetch method
    // fetch(
    //   'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json', {
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then((user) => {
    //     console.log(user)
    //   })

    //Using axios
    axios.post('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json', user)
    .then((user) => {
        console.log(user.data);
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
