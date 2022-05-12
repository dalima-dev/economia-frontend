import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

const transformObjetivo = (objetivo) => {
  return {
    ...objetivo,
    id: objetivo._id,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((objetivo) => objetivo.map(transformObjetivo));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformObjetivo);

export const objetivoService = {
  getList: () =>
    fetch(Api.objetivoList(), { method: "GET" }).then(parseTransformLista),

  getById: (id) =>
    fetch(Api.objetivoById(id), { method: "GET" }).then(parseTransformItem),

  create: (objetivo) =>
    fetch(Api.createObjetivo(), {
      method: "POST",
      body: JSON.stringify(objetivo),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(parseResponse),

  updateById: (id, objetivo) =>
    fetch(Api.updateObjetivoById(id), {
      method: "PUT",
      body: JSON.stringify(objetivo),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteObjetivoById(id), { method: "DELETE" }).then(parseResponse),
};
