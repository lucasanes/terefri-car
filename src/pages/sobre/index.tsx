import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { app } from "../../../firebaseConfig";
import * as S from "./styles";

export function Sobre() {
  const [db, setDb] = useState([""]);

  const fetchData = async () => {
    const dataBase = getDatabase(app);
    const dataBaseRef = ref(dataBase, "/about-us");
    const endpoint = await get(dataBaseRef);
    if (endpoint.exists()) {
      const array: Array<string> = endpoint.val();
      setDb(array);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container size={60}>
      <S.Body>
        <S.Text>
          {db.map((value, i) => (
            <React.Fragment key={i}>
              {value}
              <br />
              <br />
            </React.Fragment>
          ))}
        </S.Text>
        <br />
        <Tabs variant="bordered" size="md" className="tabs">
          <Tab key="vendas" title="Vendas à Vista">
            <Card>
              <CardBody>
                Vendas à vista: Oferecemos descontos especiais para pagamentos à
                vista, proporcionando uma economia ainda maior na compra do seu
                carro novo.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="financiamento" title="Financiamento">
            <Card>
              <CardBody>
                Financiamento: Trabalhamos em parceria com instituições
                financeiras renomadas para oferecer opções de financiamento com
                taxas competitivas e condições flexíveis de pagamento. Nossa
                equipe está preparada para auxiliá-lo em todo o processo, desde
                a análise de crédito até a aprovação do financiamento.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="trocas" title="Trocas de Carro">
            <Card>
              <CardBody>
                Trocas de Carro: Aceitamos seu carro usado como parte do
                pagamento na compra de um veículo em nosso estoque. Avaliamos
                seu carro de forma justa e transparente, garantindo uma
                transição suave para o seu novo veículo.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </S.Body>
    </S.Container>
  );
}
