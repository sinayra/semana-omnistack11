import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import "./style.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const ongID = localStorage.getItem("ongID");
  const history = useHistory();

  async function handleNewInicident(e) {
    e.preventDefault();

    try {
      await api.post(
        "incidents",
        {
          title,
          description,
          value
        },
        {
          headers: {
            Authorization: ongID
          }
        }
      );

      history.push("/profile");
    } catch (err) {
      alert(`Erro ao realizar registro de caso, tente novamente mais tarde`);
      console.log({ err });
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamento para encontrar um heroi para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16" color="#E02041" /> Voltar para Início
          </Link>
        </section>

        <form onSubmit={handleNewInicident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
