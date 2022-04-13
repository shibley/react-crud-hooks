import React, { useState, useEffect } from "react";
//import userList from "./data.js";
import ItemTable from "./tables/ItemTable";
import AddDefinitionForm from "./forms/AddDefinitionForm";
import EditDefinitionForm from "./forms/EditDefinitionForm";

import { useAsyncRequest } from "./hooks";

const App = () => {
  const [data, loading] = useAsyncRequest(20);
  // Fixed array of users:
  // const [users, setUsers] = userList;
  const [items, setData] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedData = data.map((obj, i) => {
        return {
          id: i,
          name: obj.Name,
          definition: obj.Definition
        };
      });
      setData(formattedData);
    }
  }, [data]);

  const addItem = (item) => {
    item.id = items.length;
    setData([...items, item]);
  };

  const deleteItem = (id) => {
    setData(items.filter((item) => item.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialItem = { id: null, name: "", definition: "" };

  const [currentItem, setCurrentItem] = useState(initialItem);

  const editDefinition = (id, item) => {
    //alert(item.name)
    setEditing(true);
    setCurrentItem(item);
  };

  const updateDefinition = (newDefinition) => {
    setData(
      items.map((item) => (item.id === currentItem.id ? newDefinition : item))
    );
    setCurrentItem(initialItem);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>Dictionary Admin</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit</h2>
              <EditDefinitionForm
                currentItem={currentItem}
                setEditing={setEditing}
                updateDefinition={updateDefinition}
              />
            </div>
          ) : (
            <div>
              <h2>Add definition</h2>
              <AddDefinitionForm addDefinition={addItem} />
            </div>
          )}
        </div>
        {loading || !items ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View definitions</h2>

            <ItemTable
              items={items}
              deleteItem={deleteItem}
              editDefinition={editDefinition}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
