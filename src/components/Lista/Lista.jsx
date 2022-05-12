import React from "react";

function Lista({ objetivosLista }) {
  return (
    <ul>
      {objetivosLista.map((objetivo) => {
        <li key={objetivo.id}>
          {`${objetivo.descricao} ${objetivo.valor}`}
          {objetivo.atingido ? (
            <input type="checkbox" name="atingido" checked />
          ) : (
            <input type="checkbox" name="atingido" />
          )}
        </li>;
      })}
    </ul>
  );
}

export default Lista;
