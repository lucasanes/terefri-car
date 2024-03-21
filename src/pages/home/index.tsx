import { SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import db from "../../db/db.json";
import * as S from "./styles";

export function Home() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState(0);

  const [marcas, setMarcas] = useState(db);
  const [modelos, setModelos] = useState(db);
  const [anos, setAnos] = useState(db);

  const [filters, setFilters] = useState(db);

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
    console.log(marca, modelo, ano);

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
      setModelos((rest) =>
        rest.filter(
          (car) =>
            car.marca == marca &&
            rest.findIndex((item) => item.marca == car.marca)
        )
      );
      setAnos((rest) => rest.filter((car) => car.marca == marca));
    }

    if (modelo != "") {
      setMarcas((rest) => rest.filter((car) => car.modelo == modelo));
      setAnos((rest) => rest.filter((car) => car.modelo == modelo));
    }

    if (ano != 0) {
      setMarcas(() =>
        db.filter(
          (car, index) =>
            car.ano == ano &&
            db.findIndex((item) => item.ano == car.ano) == index
        )
      );
      setModelos((rest) => rest.filter((car) => car.ano == ano));
    }
  }, [marca, modelo, ano]);

  return (
    <S.Container>
      <S.Search>
        <S.Filter
          variant="bordered"
          label="Marca"
          placeholder="Selecione a marca"
          onChange={(e) => setMarca(e.target.value)}
        >
          {marcas.map((car) => (
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
          {modelos.map((car) => (
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
          {anos.map((car) => (
            <SelectItem key={car.ano} value={car.ano}>
              {car.ano.toString()}
            </SelectItem>
          ))}
        </S.Filter>

        <S.ButtonSearch onClick={filter}>PESQUISAR</S.ButtonSearch>
      </S.Search>

      {JSON.stringify(filters)}
    </S.Container>
  );
}
