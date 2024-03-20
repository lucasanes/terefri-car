import { ReactNode } from "react";
import * as S from "./styles";

export function Card({
  children,
  title,
  desc,
  response,
}: {
  children: ReactNode;
  title: string;
  desc: string;
  response: string;
}) {
  return (
    <S.Container>
      <div className="header">
        {children}
        <h1>{title}</h1>
      </div>

      <div className="infos">
        <p className="p">{desc}</p>
        <p>
          <b>{response}</b>
        </p>
      </div>
    </S.Container>
  );
}
