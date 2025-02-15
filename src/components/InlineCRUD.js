import React from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = React.useState([
    {
      name: 'Item1',
      id: 1,
    },
  ]);

  const [name, setName] = React.useState('');

  const [isEdit, setIsEdit] = React.useState(false);

  const [itemToEdit, setItemToEdit] = React.useState({});

  const nameChanged = (event) => {
    console.log('name changed', event.target.value);
    setName(event.target.value);
  };

  const addItem = () => {
    console.log('add item');
    setItems([
      {
        name: name,
      },
      ...items,
    ]);
    setName('');
  };

  const deleteItem = (item) => {
    console.log('delete item');
    setItems(
      items.filter((it) => {
        return it.name !== item.name;
      })
    );
  };

  const editItemMode = (item) => {
    setIsEdit(true);
    setName(item.name);
    setItemToEdit(item);
  };

  const editItem = () => {
    items.find((it) => {
      if (it.name === itemToEdit.name) {
        it.name = name;
      }
    });
    setItems(items);
    setIsEdit(false);
    setName('');
    setItemToEdit({});
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <hr />
      <div>
        <input
          type="text"
          value={name}
          onChange={nameChanged}
          placeholder="Add item..."
        />
      </div>
      {isEdit ? (
        <button onClick={editItem}>Edit</button>
      ) : (
        <button onClick={addItem}>Add</button>
      )}

      {items?.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <button
              onClick={() => {
                deleteItem(item);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                editItemMode(item);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
}
