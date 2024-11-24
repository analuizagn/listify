import React, { useState } from "react";

function RegistrationForm({ onAuthenticate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistered, setIsRegistered] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthenticate();
  };

  return (
    <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
      <div className="flex items-center mb-8">
        <i className="fas fa-shopping-cart text-3xl mr-2"></i>
        <span className="text-3xl font-bold">LISTIFY</span>
      </div>
      <h1 className="text-5xl font-bold text-center mb-4">Uma forma mais rápida e prática para fazer suas listas de compras</h1>
      <p className="text-lg mb-8">Experimente agora!</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{isRegistered ? 'Login' : 'Register'}</h2>
        {!isRegistered && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isRegistered ? 'Login' : 'Register'}
          </button>
          <a
            href="#"
            onClick={() => setIsRegistered(!isRegistered)}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            {isRegistered ? 'Create an account' : 'Already have an account?'}
          </a>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;