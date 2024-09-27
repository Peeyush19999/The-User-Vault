import React from "react";
import { Table, Button } from "react-bootstrap";

const UserTable = ({ users, handleEditUser, handleDeleteUser }) => {
  return (
    <div className="table-responsive mt-4">
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th className="col-md-2">Name</th>
            <th className="col-md-3">Email</th>
            <th className="col-md-2">Phone</th>
            <th className="col-md-2">City (Zipcode)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.city} ({user.address.zipcode})
              </td>
              <td>
                <Button className="mx-1" variant="primary" onClick={() => handleEditUser(user)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
