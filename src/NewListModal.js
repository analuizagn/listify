import React, { useState } from "react";
import Item from "./Item";

function NewListModal({ onClose, addList }) {
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const saveList = () => {
    addList({ name: listName, items });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Nome da Lista"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <div className="space-y-2">
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
        <button
          onClick={() => addItem({ name: "", category: "alimentos", completed: false })}
          className="bg-green-500 text-white p-2 rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
        >
          Adicionar Item
        </button>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={saveList}
            className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Salvar Lista
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewListModal;
