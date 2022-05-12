import React, { useState } from "react";
import "./Input.css";

function Input({ create }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);

  const objetivo = {
    descricao,
    valor,
    atingido: false,
  };

  return (
    <div id="input">
      <input
        type="text"
        name="descricao"
        id=""
        placeholder="Descrição"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        name="valor"
        id=""
        placeholder="Valor"
        onChange={(e) => setValor(e.target.value)}
      />
      <input type="button" value="Cadastrar" onClick={() => create(objetivo)} />
    </div>
  );
}

export default Input;
