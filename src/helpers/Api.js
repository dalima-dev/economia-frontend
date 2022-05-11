const baseUrl = `https://economia-server.herokuapp.com`;

const objetivoContext = {
  medicEndpoint: () => `${baseUrl}/economia`,
  medicList: () => `${medicContext.medicEndpoint()}/find-objetivos`,
  medicById: (id) => `${medicContext.medicEndpoint()}/find-objetivos/${id}`,
  createMedic: () => `${medicContext.medicEndpoint()}/create`,
  updateMedicById: (id) => `${medicContext.medicEndpoint()}/update/${id}`,
  deleteMedicById: (id) => `${medicContext.medicEndpoint()}/delete/${id}`,
};

export const Api = { ...objetivoContext };
