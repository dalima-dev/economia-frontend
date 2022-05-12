import Input from "components/Input/Input";
import Lista from "components/Lista/Lista";
import { useEffect, useState } from "react";
import { objetivoService } from "services/ObjetivoService";
import "./Home.css";

function Home() {
  const [objetivosLista, setObjetivosLista] = useState([]);
  const [createObjetivo, setCreateObjetivo] = useState(0);
  const [deleteObjetivo, setDeleteObjetivo] = useState(0);

  const getLista = async () => {
    const response = await objetivoService.getList();
    setObjetivosLista(response);
  };

  const create = async (objetivo) => {
    await objetivoService.create(objetivo);
    setCreateObjetivo(createObjetivo + 1);
  };

  const deleteById = async (id) => {
    await objetivoService.deleteById(id);
    setDeleteObjetivo(deleteObjetivo + 1);
  };

  useEffect(() => {
    getLista();
  }, [createObjetivo, deleteObjetivo]);

  return (
    <div id="display">
      <Input create={create} />
      <Lista objetivosLista={objetivosLista} deleteById={deleteById} />
    </div>
  );
}

export default Home;
