import Input from "components/Input/Input";
import Lista from "components/Lista/Lista";
import { useEffect, useState } from "react";
import { objetivoService } from "services/ObjetivoService";
import "./Home.css";

function Home() {
  const [objetivosLista, setObjetivosLista] = useState([]);

  const getLista = async () => {
    const response = await objetivoService.getList();
    setObjetivosLista(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div id="display">
      <Input />
      <Lista objetivosLista={objetivosLista} />
    </div>
  );
}

export default Home;
