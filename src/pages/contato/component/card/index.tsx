import { Button } from "@nextui-org/react";
import { MouseEventHandler, ReactNode } from "react";
import * as S from "./styles";

export function Card({
  func,
  children,
  title,
  desc,
  response,
}: {
  func: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  title: string;
  desc: string;
  response: string;
}) {
  return (
    <S.Container>
      <div className="header">
        <Button variant="light" onClick={func}>
          {children}
          {title}
        </Button>
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
