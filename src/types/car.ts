export interface CarType {
  sold: boolean;
  marca: string;
  modelo: string;
  preco: string;
  ano: string;
  motor: string;
  km: string;
  combustivel: string;
  cambio: string;
  bluetooth: boolean;
  sensor: string;

  obs: string;

  imgs: string[];
}

export interface CarTypeStrapi {
  sold: boolean;
  marca: string;
  modelo: string;
  preco: string;
  ano: string;
  motor: string;
  km: string;
  combustivel: string;
  cambio: string;
  bluetooth: boolean;
  sensor: string;

  obs: string;

  imgs: Imgs;
}

interface Imgs {
  data: ImgsData[];
}

export interface ImgsData {
  attributes: {
    url: string;
  };
}
