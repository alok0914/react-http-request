
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
  let [userToEdit, setEditUser] = useState(null);
  let [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchUsers()
  }, []);

  function addUserHandler() {
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }

  function onDeleteUser(userToDelete) {
    axios.delete('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users/' + userToDelete.id + '.json')
        .then((deleteUser) => {
          fetchUsers();
          setShowForm(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
        })
  }

  function onCreateUser(user) {
    setErrorMessage(null);
    setLoading(true);
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
    editMode ?
      axios.put('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users/' + userToEdit.id + '.json', user)
        .then((user) => {
          fetchUsers();
          setShowForm(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
        })
      : axios.post('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json', user)
        .then((user) => {
          fetchUsers();
          setShowForm(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
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

  function onEditUser(user) {
    setShowForm(true);
    setEditMode(true);
    setEditUser(user);
  }

  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal' onClick={fetchUsers}>Get Users</button>
      </div>
      {!loading && !errorMessage && <UserDetails users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser}></UserDetails>}
      {errorMessage && <h1 style={{ textAlign: 'center' }}>{errorMessage}</h1>}
      {loading && <Loader></Loader>}
      {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToEdit}></UserForm>}
    </div>
  );
}

export default App;
