
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store'
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import UserForm from './Components/UserForm';
// import './App.css';
// import UserDetails from './Components/UserDetails';
// import axios from 'axios';
// import Loader from './Components/Loader/Loader';
// import useCounter from './Components/Utility/use-counter';
// import MouseTracker from './Components/MouseTracker';
// import Basic from './Components/BasicFormik';
//import UserFormQ1 from './Components/SNP/UserFormQ1';
import AddToDO from './Components/ToDo/addToDoComponent';
import ListToDO from './Components/ToDo/ListToDoComponent';
// import ProductListQ3 from './Components/SNP/ProductListQ3';
// import UserList from './Components/SNP/UserFilterQ4';


// const Users = () => <h1>All Users</h1>;
// const ViewUser = () => <h1>User Details</h1>;


function App() {
  // let [showForm, setShowForm] = useState(false);
  // let [users, setUsers] = useState([]);
  // let [loading, setLoading] = useState(false);
  // let [errorMessage, setErrorMessage] = useState(null);
  // let [userToEdit, setEditUser] = useState(null);
  // let [userToView, setViewUser] = useState(null);
  // let [editMode, setEditMode] = useState(false);
  // let counter = useCounter(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchUsers()
  // }, []);

  // function addUserHandler() {
  //   setEditMode(false);
  //   setShowForm(true);
  // }

  // function closeForm() {
  //   setShowForm(false)
  // }

  // function onDeleteUser(userToDelete) {
  //   axios.delete('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users/' + userToDelete.id + '.json')
  //     .then((deleteUser) => {
  //       fetchUsers();
  //       setShowForm(false);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //       setLoading(false);
  //     })
  // }

  // function onCreateUser(user) {
  //   setErrorMessage(null);
  //   setLoading(true);
  //   //Using JS fetch method
  //   // fetch(
  //   //   'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(user),
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   }
  //   // })
  //   //   .then((user) => {
  //   //     console.log(user)
  //   //   })

  //   //Using axios
  //   editMode ?
  //     axios.put('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users/' + userToEdit.id + '.json', user)
  //       .then((user) => {
  //         fetchUsers();
  //         setShowForm(false);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message);
  //         setLoading(false);
  //       })
  //     : axios.post('https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json', user)
  //       .then((user) => {
  //         fetchUsers();
  //         setShowForm(false);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message);
  //         setLoading(false);
  //       })

  // }

  // function fetchUsers() {
  //   // Using JS fetch method
  //   // fetch(
  //   //   'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json')
  //   //   .then((response) => {
  //   //     return response.json()
  //   //   }).then((users) => {
  //   //     let usersData = [];
  //   //     for (const key in users) {
  //   //       usersData.push({ ...users[key], id: key });
  //   //     }
  //   //     setUsers(usersData);
  //   //   });

  //   //Using axios
  //   setErrorMessage(null);
  //   setLoading(true);
  //   axios.get(
  //     'https://react-http-tutorial-5cf12-default-rtdb.firebaseio.com/users.json')
  //     .then((response) => {
  //       return response.data;
  //     }).then((users) => {
  //       let usersData = [];
  //       for (const key in users) {
  //         usersData.push({ ...users[key], id: key });
  //       }
  //       setUsers(usersData);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //       setErrorMessage(error.message);
  //       setLoading(false);
  //     })

  // }

  // function onEditUser(user) {
  //   setShowForm(true);
  //   setEditMode(true);
  //   setEditUser(user);
  // }

  // function onViewUser(user) {
  //   // setShowForm(true);
  //   // setEditMode(true);
  //   // setEditUser(user);
  //   navigate('/viewUser');
  // }

  // // return (
  // //   <div>
  // //     <Routes>
  // //       <Route path="/" element={<Users />} />
  // //       <Route path="/viewUser" element={<ViewUser />} />
  // //       {/* Optional: Catch-all route for 404 pages */}
  // //       <Route path="*" element={<h1>404 Not Found</h1>} />
  // //     </Routes>
  // //     <div className='page-header'>
  // //       <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
  // //       <button className='btn btn-normal' onClick={fetchUsers}>Get Users</button>
  // //     </div>
  // //     {/* Custom Hook Example:{<h1>See my custom counter: {counter}</h1>} */}
  // //     {!loading && !errorMessage && <UserDetails users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser} onViewUser={onViewUser}></UserDetails>}
  // //     {errorMessage && <h1 style={{ textAlign: 'center' }}>{errorMessage}</h1>}
  // //     {loading && <Loader></Loader>}
  // //     {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToEdit}></UserForm>}
  // //   </div>
  // // );

  // //Render Props Example
  // // return (
  // //   <div>
  // //     <h1>Move the mouse around!</h1>
  // //     <MouseTracker
  // //       render={(mouse) => ( // The render prop function
  // //         <p>
  // //           The mouse position is ({mouse.x}, {mouse.y})
  // //         </p>
  // //       )}
  // //     />
  // //   </div>
  // // );

  // return <ProductListQ3></ProductListQ3>
  // return <UserList></UserList>
  // return <UserFormQ1></UserFormQ1>
  return (
    <Provider store={store}>
      <div>
        <AddToDO />
        <ListToDO />
      </div>
    </Provider>
  );
}

export default App;
