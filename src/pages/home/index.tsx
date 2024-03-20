import { SelectItem } from "@nextui-org/react";
import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Search>
        <S.Filter
          variant="bordered"
          label="Marca"
          placeholder="Selecione a marca"
        >
          {[1, 2, 3].map((animal) => (
            <SelectItem key={animal} value={animal}>
              {animal.toString()}
            </SelectItem>
          ))}
        </S.Filter>

        <S.Filter
          variant="bordered"
          label="Modelo"
          placeholder="Selecione o modelo"
        >
          {[1, 2, 3].map((animal) => (
            <SelectItem key={animal} value={animal}>
              {animal.toString()}
            </SelectItem>
          ))}
        </S.Filter>

        <S.Filter variant="bordered" label="Ano" placeholder="Selecione o ano">
          {[1, 2, 3].map((animal) => (
            <SelectItem key={animal} value={animal}>
              {animal.toString()}
            </SelectItem>
          ))}
        </S.Filter>

        <S.ButtonSearch>PESQUISAR</S.ButtonSearch>
      </S.Search>
    </S.Container>
  );
}
