import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    return (
        <div className="body">
            <div className="login-container">
                <h2>Registro</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Registrar</button>
                </form>
                <div className="create-account">Criar uma conta</div>
            </div>
        </div>
    );
};

export default RegistrationForm;