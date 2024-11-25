import React, { useState } from "react";
import './App.css';
import RegistrationForm from './RegistrationForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleEnterClick = () => {
    setShowLogin(true);
  };

  return (
    <div className={`main-container ${showLogin ? 'login-active' : ''}`}>
      {/* Imagem de fundo com opacidade (somente na tela inicial) */}
      {!showLogin && (
        <img
          src="/imagem-background.jpeg"
          alt="Background"
          className="background-image"
        />
      )}

      {/* Content */}
      <div className="content">
        {showLogin ? (
          // Exibe o formulário de registro
          <RegistrationForm />
        ) : (
          <>
            {/* Logo */}
            <div className="logo">
              <img
                src="/shopping-cart.png"
                alt="Carrinho de compras"
                className="cart-icon"
              />
              <h1 className="listify">LISTIFY</h1>
            </div>

            {/* Main Heading */}
            <h2 className="main-heading">
              Uma forma mais rápida e prática para fazer suas listas de compras
            </h2>

            {/* Subheading */}
            <p className="subheading">Experimente agora!</p>

            {/* Button */}
            <button className="btn-enter" onClick={handleEnterClick}>ENTRAR</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
