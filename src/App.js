
import React, { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';
import Loader from './Components/Loader/Loader';


function App() {
  let [showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchUsers()
  }, []);

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
        fetchUsers();
        setShowForm(false);
      })

  }

  function fetchUsers() {
    // Using JS fetch method
    // fetch(
    //   'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json')
    //   .then((response) => {
    //     return response.json()
    //   }).then((users) => {
    //     let usersData = [];
    //     for (const key in users) {
    //       usersData.push({ ...users[key], id: key });
    //     }
    //     setUsers(usersData);
    //   });

    //Using axios
    setErrorMessage(null);
    setLoading(true);
    axios.get(
      'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json')
      .then((response) => {
        return response.data;
      }).then((users) => {
        let usersData = [];
        for (const key in users) {
          usersData.push({ ...users[key], id: key });
        }
        setUsers(usersData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message)
        setErrorMessage(error.message);
        setLoading(false);
      })

  }

  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal' onClick={fetchUsers}>Get Users</button>
      </div>
      {!loading && !errorMessage && <UserDetails users={users}></UserDetails>}
      {errorMessage && <h1 style={{ textAlign: 'center' }}>{errorMessage}</h1>}
      {loading && <Loader></Loader>}
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser}></UserForm>}
    </div>
  );
}

export default App;
