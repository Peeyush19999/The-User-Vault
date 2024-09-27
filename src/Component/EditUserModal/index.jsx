import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditUserModal = ({
  showModal,
  setShowModal,
  editUserDetails,
  setEditUserDetails,
  handleSaveEdit,
}) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#0d6efd", color: "white" }}
      >
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        {editUserDetails && (
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editUserDetails.name}
                onChange={(e) =>
                  setEditUserDetails({
                    ...editUserDetails,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editUserDetails.email}
                onChange={(e) =>
                  setEditUserDetails({
                    ...editUserDetails,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={editUserDetails.phone}
                onChange={(e) =>
                  setEditUserDetails({
                    ...editUserDetails,
                    phone: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={editUserDetails.address.city}
                onChange={(e) =>
                  setEditUserDetails({
                    ...editUserDetails,
                    address: {
                      ...editUserDetails.address,
                      city: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                value={editUserDetails.address.zipcode}
                onChange={(e) =>
                  setEditUserDetails({
                    ...editUserDetails,
                    address: {
                      ...editUserDetails.address,
                      zipcode: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserModal;
