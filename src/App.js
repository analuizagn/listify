import React from "react";
import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Imagem de fundo com opacidade */}
      <img
        src="/imagem-background.jpeg"
        alt="Background"
        className="background-image"
      />

      {/* Content */}
      <div className="content">
        {/* Logo */}
        <div className="logo">
          {/* Ícone do carrinho */}
          <img
            src="/shopping-cart.png"
            alt="Carrinho de compras"
            className="cart-icon"
          />
          {/* LISTIFY */}
          <h1 className="listify">LISTIFY</h1>
        </div>

        {/* Main Heading */}
        <h2 className="main-heading">
          Uma forma mais rápida e prática para fazer suas listas de compras
        </h2>

        {/* Subheading */}
        <p className="subheading">Experimente agora!</p>

        {/* Button */}
        <button className="btn-enter">ENTRAR</button>
      </div>
    </div>
  );
}

export default App;