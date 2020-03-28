import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

function NewIncident() {
    return (
        <div className="new-incident-container" >
            <div className="content" >
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1> Cadastar novo caso </h1>
                    <p> Descreva o caso detalhadamente para encontrar um herói para resolver isto </p>
                    <Link className="back-link"
                        to="/profile" >
                        <FiLogIn size={16}
                            color="#E02041" />
                    Voltar para home </Link>
                </section>
                <form>
                    <input type="text"
                        placeholder="Título do Caso" />
                    <textarea type="text"
                        placeholder="Descrição" />
                    <input type="text"
                        placeholder="Valor em reais" />
                    <div className="input-group" >
                        <button type="submit" className="button" > Cadastrar </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;