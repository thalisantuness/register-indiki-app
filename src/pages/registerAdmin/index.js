import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Questions() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [codigoEmpresa, setCodigoEmpresa] = useState("");
  const navigate = useNavigate();  // Hook do React Router para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://indiki.onrender.com/users/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
        cpf,
        codigoEmpresa,
      }),
    });

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      navigate("/validation");  // Navegação para a rota de validação
    } else {
      alert("Erro ao realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Cadastre-se</h1>

        <div className="input-box">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>CPF</label>
          <input
            type="text"
            placeholder="CPF"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Código da Empresa</label>
          <input
            type="text"
            placeholder="Código que a empresa lhe concedeu"
            required
            value={codigoEmpresa}
            onChange={(e) => setCodigoEmpresa(e.target.value)}
          />
        </div>

        <button type="submit" className="button">Cadastre-se</button>
      </form>
    </div>
  );
}
