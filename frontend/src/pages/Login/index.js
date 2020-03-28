import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import "./style.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Login() {
  const [id, setID] = useState("");
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      const resp = await api.post("sessions", {id});

      localStorage.setItem("ongID", id);
      localStorage.setItem("ongName", resp.data.ong.name);

      history.push("/profile");
    } catch (err) {
      alert(`Falha ao logar`);
      console.log({ err });
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça o seu login</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size="16" color="#E02041" /> Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
