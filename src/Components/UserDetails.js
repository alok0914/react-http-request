import React from "react";
import './UserDetails.css';

function UserDetails(props) {

  function onEditUserHandler(event, user) {
    props.onEditUser(user);
  }

  function onViewUserHandler(event, user) {
    props.onViewUser(user);
  }

  function onDeleteUserHandler(event, user) {
    let del = window.confirm('Do you really want to delete the record of ' + user.firstName + ' ' + user.lastName)
    if (del) {
      props.onDeleteUser(user);
    }

  }

  return <div className="user-details">
    <table className="users-table">
      <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>Date Of Birth</th>
        <th>Gender</th>
        <th>Country</th>
        <th>City</th>
        <th></th>
      </tr>

      {props.users.map((user) => {
        return <>
          <tr key={user.id}>
            <td>{user.firstName + ' ' + user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
            <td>{user.gender}</td>
            <td>{user.country}</td>
            <td>{user.city}</td>
            <td>
              <button className="btn btn-primary" onClick={(event) => { onEditUserHandler(event, user) }}>Edit</button>
              <button className="btn btn-danger" onClick={(event) => { onDeleteUserHandler(event, user) }}>Delete </button>
              <button className="btn btn-primary" onClick={(event) => { onViewUserHandler(event, user) }}>View </button>
            </td>
          </tr>
        </>
      })}

    </table>
  </div>
}

export default UserDetails;