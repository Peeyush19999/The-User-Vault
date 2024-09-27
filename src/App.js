import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, editUser } from "./redux/userSlice";
import NewUserForm from "./Component/NewUserForm'";
import { Accordion } from "react-bootstrap";
import { fetchUsers } from "./redux/actions";
import UserTable from "./Component/UserTable";
import EditUserModal from "./Component/EditUserModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [showModal, setShowModal] = useState(false);
  const [editUserDetails, setEditUserDetails] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      city: "",
      zipcode: "",
    },
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    const id = users.length + 1;
    dispatch(addUser({ ...newUser, id }));
    setNewUser({
      name: "",
      email: "",
      phone: "",
      address: { city: "", zipcode: "" },
    });
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditUser = (user) => {
    setEditUserDetails(user);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    dispatch(editUser(editUserDetails));
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h1 style={{ color: "#0d6efd" }}>User Vault</h1>

      <Accordion defaultActiveKey="0" className="my-3 custom-accordion">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add New User</Accordion.Header>
          <Accordion.Body className="bg-light text-dark">
            <NewUserForm
              newUser={newUser}
              setNewUser={setNewUser}
              handleAddUser={handleAddUser}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <UserTable
        users={users}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />

      <EditUserModal
        showModal={showModal}
        setShowModal={setShowModal}
        editUserDetails={editUserDetails}
        setEditUserDetails={setEditUserDetails}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
};

export default App;
