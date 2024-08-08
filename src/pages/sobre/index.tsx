import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import * as S from './styles';

export function Sobre() {
  const db = [
    'Vendas à vista: Despesa de transferência de propriedade do veículo correrá por nossa conta.',
    'Financiamento: Trabalhamos em parceria com instituições financeiras diversas para oferecer taxas competitivas e condições flexíveis de pagamento. Nossa equipe está preparada para auxiliá-lo em todo o processo, desde a análise de crédito até a aprovação do financiamento.',
    'Trocas de Carro: Aceitamos seu carro usado como parte do pagamento na compra de um veículo em nosso estoque. Avaliamos seu carro de forma justa e transparente, garantindo uma transição suave para o seu novo veículo.',
    'Nosso Compromisso: Transparência e Qualidade',
    'Terê-Fri Car, a sua nova opção em Teresópolis de automóveis novos e semi novos. Somos uma loja focada em oferecer uma experiência diferenciada aos nossos clientes, combinando variedade, qualidade e confiança em nossos serviços.',
    'Aqui valorizamos a transparência em todas as nossas transações, nossa equipe está comprometida em fornecer informações claras e precisas sobre cada veículo em nosso estoque, desde a sua condição mecânica até o histórico de manutenção. Queremos que você se sinta confiante ao tomar uma decisão de compra conosco.',
    'Além disso, priorizamos a qualidade dos carros que oferecemos, garantindo assim que estejam em ótimas condições, proporcionando segurança e tranquilidade aos nossos clientes.',
    'Estamos convenientemente localizados em Teresópolis, em uma área de fácil acesso para clientes de toda a região. Venha nos fazer uma visita e conhecer pessoalmente nossa variedade de carros.',
    'Para mais informações, acesse a página de contato aqui no nosso site. Estamos ansiosos para ajudá-lo a encontrar o carro dos seus sonhos, conte conosco para uma experiência de compra excepcional!',
  ];

  return (
    <S.Container size={60}>
      <S.Body>
        <S.Text>
          {db.map((value, i) =>
            i == 3 ? (
              <React.Fragment key={i}>
                <b>Nosso Compromisso: Transparência e Qualidade</b>
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
        <Tabs variant='bordered' size='md' className='tabs'>
          <Tab key='vendas' title='Vendas à Vista'>
            <Card>
              <CardBody>{db[0]}</CardBody>
            </Card>
          </Tab>
          <Tab key='financiamento' title='Financiamento'>
            <Card>
              <CardBody>{db[1]}</CardBody>
            </Card>
          </Tab>
          <Tab key='trocas' title='Trocas de Carro'>
            <Card>
              <CardBody>{db[2]}</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </S.Body>
    </S.Container>
  );
}
