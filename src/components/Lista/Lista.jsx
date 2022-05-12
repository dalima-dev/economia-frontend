import React, { useState } from "react";

function Lista({ objetivosLista, deleteById, updateById }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [atingido, setAtingido] = useState(false);

  const updatedObjetivo = {
    descricao,
    valor,
    atingido,
  };

  return (
    <ul>
      {objetivosLista.map((objetivo) => {
        return (
          <li key={objetivo.id}>
            <input
              type="text"
              name="descricao"
              value={objetivo.descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <input
              type="number"
              name="valor"
              value={objetivo.valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <input
              type="checkbox"
              name="atingido"
              onChange={(e) => setAtingido(e.target.checked)}
            />
            <input
              type="button"
              value="X"
              onClick={() => deleteById(objetivo.id)}
            />
            <button onClick={() => updateById(objetivo.id, updatedObjetivo)}>
              Atualizar
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Lista;
