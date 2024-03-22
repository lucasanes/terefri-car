import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
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
          {db.map((value, i) =>
            i == 3 ? (
              <React.Fragment key={i}>
                <b>{value}</b>
                <br />
                <br />
              </React.Fragment>
            ) : (
              i > 3 && (
                <React.Fragment key={i}>
                  {value}
                  <br />
                  <br />
                </React.Fragment>
              )
            )
          )}
        </S.Text>
        <br />
        <Tabs variant="bordered" size="md" className="tabs">
          <Tab key="vendas" title="Vendas à Vista">
            <Card>
              <CardBody>Vendas à vista: {db[0]}</CardBody>
            </Card>
          </Tab>
          <Tab key="financiamento" title="Financiamento">
            <Card>
              <CardBody>Financiamento: {db[1]}</CardBody>
            </Card>
          </Tab>
          <Tab key="trocas" title="Trocas de Carro">
            <Card>
              <CardBody>Trocas de Carro: {db[3]}</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </S.Body>
    </S.Container>
  );
}
