import { SelectItem, Spinner } from "@nextui-org/react";
import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { app } from "../../firebaseConfig";
import { CarType } from "../../types/car";
import * as S from "./styles";

export function Home() {
  const [db, setDb] = useState<Array<CarType>>([]);

  const [loading, setLoading] = useState(true);

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState(0);

  const [marcas, setMarcas] = useState<Array<CarType>>([]);
  const [modelos, setModelos] = useState<Array<CarType>>([]);
  const [anos, setAnos] = useState<Array<CarType>>([]);

  const [filters, setFilters] = useState<Array<CarType>>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const dataBase = getDatabase(app);
      const dataBaseRef = ref(dataBase, "/cars");
      const endpoint = await get(dataBaseRef);
      if (endpoint.exists()) {
        const array: Array<CarType> = endpoint.val();
        const actives = array.filter((car) => car.active === true);
        setDb(actives);
        setFilters(actives);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function filter() {
    setFilters(
      db.filter((rest) => {
        return (
          (!marca || rest.marca === marca) &&
          (!modelo || rest.modelo === modelo) &&
          (!ano || rest.ano === ano)
        );
      })
    );
  }

  useEffect(() => {
    setMarcas(() =>
      db.filter((opcao, index) => {
        return db.findIndex((item) => item.marca === opcao.marca) === index;
      })
    );

    setModelos(() =>
      db.filter((opcao, index) => {
        return db.findIndex((item) => item.modelo === opcao.modelo) === index;
      })
    );

    setAnos(() =>
      db.filter((opcao, index) => {
        return db.findIndex((item) => item.ano === opcao.ano) === index;
      })
    );

    if (marca != "") {
      setModelos(() =>
        db
          .filter((car) => car.marca == marca)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.modelo == car.modelo) == i
          )
      );
      setAnos(() =>
        db
          .filter((car) => car.marca == marca)
          .filter(
            (car, i, self) => self.findIndex((item) => item.ano == car.ano) == i
          )
      );
    }

    if (modelo != "") {
      setMarcas(() =>
        db
          .filter((car) => car.modelo == modelo)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.marca == car.marca) == i
          )
      );
      setAnos(() =>
        db
          .filter((car) => car.modelo == modelo)
          .filter(
            (car, i, self) => self.findIndex((item) => item.ano == car.ano) == i
          )
      );
    }

    if (ano != 0) {
      setMarcas(() =>
        db
          .filter((car) => car.ano == ano)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.marca == car.marca) == i
          )
      );
      setModelos(() =>
        db
          .filter((car) => car.ano == ano)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.modelo == car.modelo) == i
          )
      );
    }
  }, [db, marca, modelo, ano]);

  return (
    <S.Container>
      <S.Search>
        <S.Filter
          variant="bordered"
          label="Marca"
          placeholder="Selecione a marca"
          onChange={(e) => setMarca(e.target.value)}
        >
          {marcas
            .sort((a, b) => a.marca.localeCompare(b.marca))
            .map((car) => (
              <SelectItem key={car.marca} value={car.marca}>
                {car.marca}
              </SelectItem>
            ))}
        </S.Filter>

        <S.Filter
          variant="bordered"
          label="Modelo"
          placeholder="Selecione o modelo"
          onChange={(e) => setModelo(e.target.value)}
        >
          {modelos
            .sort((a, b) => a.modelo.localeCompare(b.modelo))
            .map((car) => (
              <SelectItem key={car.modelo} value={car.modelo}>
                {car.modelo}
              </SelectItem>
            ))}
        </S.Filter>

        <S.Filter
          variant="bordered"
          label="Ano"
          placeholder="Selecione o ano"
          onChange={(e) => setAno(Number(e.target.value))}
        >
          {anos
            .sort((a, b) => a.ano - b.ano)
            .map((car) => (
              <SelectItem key={car.ano} value={car.ano}>
                {car.ano.toString()}
              </SelectItem>
            ))}
        </S.Filter>

        <S.ButtonSearch onClick={filter}>PESQUISAR</S.ButtonSearch>
      </S.Search>

      <S.Body>
        {loading && <Spinner size="lg" />}
        {!loading && filters.map((car, i) => <Card key={i} car={car} />)}
      </S.Body>
    </S.Container>
  );
}
