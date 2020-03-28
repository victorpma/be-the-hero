import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (error) {
            alert('Ocorreu um erro ao cadastro Caso, tente novamente.');
        }
    }

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
                <form onSubmit={handleNewIncident}>
                    <input
                        type="text"
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div className="input-group" >
                        <button type="submit" className="button" > Cadastrar </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;