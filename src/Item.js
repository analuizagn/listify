import React, { useState } from "react";

function Item({ item }) {
  const [completed, setCompleted] = useState(item.completed);
  const [name, setName] = useState(item.name);

  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        className="w-3/4 p-2 border border-gray-300 rounded mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => setCompleted(!completed)}
        className={`text-${completed ? "green" : "red"}-500 hover:text-${completed ? "green" : "red"}-700`}
      >
        <i className={`fas fa-${completed ? "check" : "times"}`}></i>
      </button>
    </div>
  );
}

export default Item;
