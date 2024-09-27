import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NewUserForm = ({ newUser, setNewUser, handleAddUser }) => {
  return (
    <Form>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-sm-12">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              value={newUser.phone}
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-sm-12">
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={newUser.address.city}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  address: { ...newUser.address, city: e.target.value },
                })
              }
            />
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter zip code"
              value={newUser.address.zipcode}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  address: {
                    ...newUser.address,
                    zipcode: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
        </div>
      </div>

      <Button
        variant="success"
        className="mt-3"
        onClick={handleAddUser}
      >
        Add User
      </Button>
    </Form>
  );
};

export default NewUserForm;