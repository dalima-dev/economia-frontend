const baseUrl = `https://economia-server.herokuapp.com`;

const objetivoContext = {
  objetivoEndpoint: () => `${baseUrl}/economia`,
  objetivoList: () => `${objetivoContext.objetivoEndpoint()}/find-objetivos`,
  objetivoById: (id) =>
    `${objetivoContext.objetivoEndpoint()}/find-objetivos/${id}`,
  createObjetivo: () => `${objetivoContext.objetivoEndpoint()}/create`,
  updateObjetivoById: (id) =>
    `${objetivoContext.objetivoEndpoint()}/update/${id}`,
  deleteObjetivoById: (id) =>
    `${objetivoContext.objetivoEndpoint()}/delete/${id}`,
};

export const Api = { ...objetivoContext };
