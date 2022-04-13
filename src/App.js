import React, { useState } from "react";
import userList from "./data.js";
import ItemTable from "./tables/ItemTable";
import AddDefinitionForm from "./forms/AddDefinitionForm";
import EditDefinitionForm from "./forms/EditDefinitionForm";

const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteItem = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>BTCCPR Dictionary Admin</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditDefinitionForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add Definition</h2>
              <AddDefinitionForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View Dictionary Definitions</h2>
          <ItemTable
            users={users}
            deleteItem={deleteItem}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
