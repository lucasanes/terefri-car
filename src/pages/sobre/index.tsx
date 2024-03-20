import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import * as S from "./styles";

export function Sobre() {
  return (
    <S.Container>
      <S.Text>
        Bem-vindo à Terê-Fri Car, a sua nova opção em Teresópolis de novos e
        semi novos, para compra de carros populares com facilidades exclusivas
        de pagamento. Somos uma loja focada em oferecer uma experiência
        diferenciada aos nossos clientes, combinando variedade, qualidade e
        confiança em nossos serviços.
        <br /> <br />
        Nosso Compromisso: Transparência e Qualidade
        <br /> <br />
        Aqui valorizamos a transparência em todas as nossas transações. Nossa
        equipe está comprometida em fornecer informações claras e precisas sobre
        cada veículo em nosso estoque, desde a sua condição mecânica até o
        histórico de manutenção. Queremos que você se sinta confiante ao tomar
        uma decisão de compra conosco.
        <br /> <br />
        Além disso, priorizamos a qualidade dos carros que oferecemos. Todos os
        veículos em nosso showroom passam por uma rigorosa inspeção para
        garantir que estejam em ótimas condições, proporcionando segurança e
        tranquilidade aos nossos clientes.
        <br /> <br />
        Serviços Especiais: Vendas à Vista, Financiamento e Trocas Na Terê-Fri
        Car, entendemos que cada cliente tem necessidades únicas quando se trata
        de adquirir um veículo. Por isso, oferecemos diferentes opções de
        pagamento para atender a diversos perfis de compradores:
        <br /> <br />
        <Tabs>
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
        <br />
        Estamos convenientemente localizados em Teresópolis, em uma área de
        fácil acesso para clientes de toda a região. Venha nos fazer uma visita
        e conhecer pessoalmente nossa variedade de carros populares e nossas
        opções de pagamento.
        <br />
        Para mais informações, entre em contato conosco pelos nossos meios de
        contato. Estamos ansiosos para ajudá-lo a encontrar o carro dos seus
        sonhos com facilidade e tranquilidade. Conte conosco para uma
        experiência de compra excepcional!
      </S.Text>
    </S.Container>
  );
}
