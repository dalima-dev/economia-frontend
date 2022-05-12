
function Lista({ objetivosLista, deleteById, updateById }) {
  return (
    <ul>
      {objetivosLista.map((objetivo) => {
        return (
          <li key={objetivo.id}>
            <input
              type="text"
              name="descricao"
              defaultValue={objetivo.descricao}
              onChange={(e) =>
                objetivosLista.forEach((obj) => {
                  if (obj.id === objetivo.id) obj.descricao = e.target.value;
                })
              }
            />
            <input
              type="number"
              name="valor"
              defaultValue={objetivo.valor}
              onChange={(e) =>
                objetivosLista.forEach((obj) => {
                  if (obj.id === objetivo.id) obj.valor = e.target.value;
                })
              }
            />
            <input
              type="checkbox"
              name="atingido"
              defaultChecked={objetivo.atingido}
              onChange={(e) =>
                objetivosLista.forEach((obj) => {
                  if (obj.id === objetivo.id) obj.atingido = e.target.checked;
                })
              }
            />
            <input
              type="button"
              value="X"
              onClick={() => deleteById(objetivo.id)}
            />
            <button
              onClick={() =>
                updateById(
                  objetivo.id,
                  objetivosLista.find((obj) => obj.id === objetivo.id)
                )
              }
            >
              Atualizar
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Lista;
