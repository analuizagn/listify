import React, { useState } from "react";
import NewListModal from "./NewListModal";

function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listas, setListas] = useState([]);

  const addList = (list) => {
    setListas([...listas, list]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Listify</h1>
        <div className="space-y-4">
          {listas.map((list, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-xl font-bold">{list.name}</h3>
                <ul className="list-disc pl-5">
                  {list.items.map((item, i) => (
                    <li key={i} className={`${item.completed ? 'line-through text-gray-500' : ''}`}>
                      {item.name} ({item.category})
                    </li>
                  ))}
                </ul>
              </div>
              <button className="text-red-500 hover:text-red-700 focus:outline-none">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      {isModalOpen && <NewListModal onClose={() => setIsModalOpen(false)} addList={addList} />}
    </div>
  );
}

export default ListPage;