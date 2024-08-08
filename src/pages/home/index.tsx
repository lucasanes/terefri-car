/* eslint-disable react-hooks/exhaustive-deps */
import { SelectItem, Spinner } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../../components/card';
import { CarType, CarTypeStrapi, ImgsData } from '../../types/car';
import * as S from './styles';

interface StrapiResponse {
  id: number;
  attributes: CarTypeStrapi;
}

export function Home() {
  const [cars, setCars] = useState<Array<CarType>>([]);

  const [loading, setLoading] = useState(true);

  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState(0);

  const [marcas, setMarcas] = useState<Array<CarType>>([]);
  const [modelos, setModelos] = useState<Array<CarType>>([]);
  const [anos, setAnos] = useState<Array<CarType>>([]);

  const [filters, setFilters] = useState<Array<CarType>>([]);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_URL_CARS = import.meta.env.VITE_API_URL_CARS;

  async function fetchData() {
    try {
      setLoading(true);

      const response = await axios.get(`${API_URL_CARS}`);

      const cars: CarType[] = response.data.data.map((car: StrapiResponse) => {
        let imgs = [''];
        if (car.attributes.imgs.data && car.attributes.imgs.data.length > 0) {
          imgs = car.attributes.imgs.data.map((img: ImgsData) => {
            return `${API_URL}${img.attributes.url}`;
          });
        }
        return { ...car.attributes, imgs };
      });

      setCars(cars);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function ordenarAlfabetica(a: CarType, b: CarType) {
    if (a.sold && !b.sold) {
      return 1;
    }
    if (!a.sold && b.sold) {
      return -1;
    }
    if (a.marca < b.marca) {
      return -1;
    }
    if (a.marca > b.marca) {
      return 1;
    }
    return 0;
  }

  function filter() {
    setFilters(
      cars
        .filter((rest) => {
          return (
            (!marca || rest.marca === marca) &&
            (!modelo || rest.modelo === modelo) &&
            (!ano || Number(rest.ano) === ano)
          );
        })
        .sort(ordenarAlfabetica)
    );
  }

  useEffect(() => {
    setMarcas(() =>
      cars.filter((opcao, index) => {
        return cars.findIndex((item) => item.marca === opcao.marca) === index;
      })
    );

    setModelos(() =>
      cars.filter((opcao, index) => {
        return cars.findIndex((item) => item.modelo === opcao.modelo) === index;
      })
    );

    setAnos(() =>
      cars.filter((opcao, index) => {
        return cars.findIndex((item) => item.ano === opcao.ano) === index;
      })
    );

    if (marca == '' && modelo == '' && ano == 0) {
      setFilters(
        cars
          .filter((rest) => {
            return (
              (!marca || rest.marca === marca) &&
              (!modelo || rest.modelo === modelo) &&
              (!ano || rest.ano === ano)
            );
          })
          .sort(ordenarAlfabetica)
      );
    }

    if (marca != '') {
      setModelos(() =>
        cars
          .filter((car) => car.marca == marca)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.modelo == car.modelo) == i
          )
      );
      setAnos(() =>
        cars
          .filter((car) => car.marca == marca)
          .filter(
            (car, i, self) => self.findIndex((item) => item.ano == car.ano) == i
          )
      );
    }

    if (modelo != '') {
      setMarcas(() =>
        cars
          .filter((car) => car.modelo == modelo)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.marca == car.marca) == i
          )
      );
      setAnos(() =>
        cars
          .filter((car) => car.modelo == modelo)
          .filter(
            (car, i, self) => self.findIndex((item) => item.ano == car.ano) == i
          )
      );
    }

    if (ano != 0) {
      setMarcas(() =>
        cars
          .filter((car) => Number(car.ano) == ano)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.marca == car.marca) == i
          )
      );
      setModelos(() =>
        cars
          .filter((car) => Number(car.ano) == ano)
          .filter(
            (car, i, self) =>
              self.findIndex((item) => item.modelo == car.modelo) == i
          )
      );
    }
  }, [cars, marca, modelo, ano]);

  return (
    <S.Container>
      <S.Search>
        <S.Filter
          variant='bordered'
          label='Marca'
          placeholder='Selecione a marca'
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
          variant='bordered'
          label='Modelo'
          placeholder='Selecione o modelo'
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
          variant='bordered'
          label='Ano'
          placeholder='Selecione o ano'
          onChange={(e) => setAno(Number(e.target.value))}
        >
          {anos
            .sort((a, b) => Number(a.ano) - Number(b.ano))
            .map((car) => (
              <SelectItem key={car.ano} value={car.ano}>
                {car.ano.toString()}
              </SelectItem>
            ))}
        </S.Filter>

        <S.ButtonSearch onClick={filter}>PESQUISAR</S.ButtonSearch>
      </S.Search>

      <S.Body>
        {loading && <Spinner size='lg' />}
        {!loading && filters.map((car, i) => <Card key={i} car={car} />)}
      </S.Body>
    </S.Container>
  );
}
