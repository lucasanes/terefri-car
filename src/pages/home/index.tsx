import { Select, SelectItem } from "@nextui-org/react";
import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Search>
        <S.Filter variant="bordered" label="Selecione a marca">
          {[1, 2, 3].map((animal) => (
            <SelectItem key={animal} value={animal}>
              {animal}
            </SelectItem>
          ))}
        </S.Filter>
      </S.Search>

      <Select size="sm" label="Select an animal" className="max-w-xs">
        {[0, 1, 2, 3].map((animal) => (
          <SelectItem key={animal} value={animal}>
            {animal.toString()}
          </SelectItem>
        ))}
      </Select>
    </S.Container>
  );
}
