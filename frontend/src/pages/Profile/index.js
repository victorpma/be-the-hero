import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Profile() {
    const ongName = localStorage.getItem('ongName');

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button"><FiPower size={18} color="#E02041" /></button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso</strong>
                    <p>Cadelinha atropelada</p>

                    <strong>Descrição</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirúrgia.</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8a3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Cadelinha atropelada</p>

                    <strong>Descrição</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirúrgia.</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8a3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Cadelinha atropelada</p>

                    <strong>Descrição</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirúrgia.</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8a3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Cadelinha atropelada</p>

                    <strong>Descrição</strong>
                    <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirúrgia.</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8a3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;