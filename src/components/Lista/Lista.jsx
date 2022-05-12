import React from "react";

function Lista({ objetivosLista, deleteById }) {
  return (
    <ul>
      {objetivosLista.map((objetivo) => {
        return (
          <li key={objetivo.id}>
            {`${objetivo.descricao} ${objetivo.valor}`}
            {objetivo.atingido ? (
              <input type="checkbox" name="atingido" checked />
            ) : (
              <input type="checkbox" name="atingido" />
            )}
            <input type="button" value="X" onClick={() => deleteById(objetivo.id)} />
          </li>
        );
      })}
    </ul>
  );
}

export default Lista;
