import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CalculateAge } from "../calculate/calculate-age";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

/**
 * Componente que exibe uma breve apresentação do desenvolvedor.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export function AboutMe(): JSX.Element {
  const [age, setAge]: [number, Dispatch<SetStateAction<number>>] =
    useState(CalculateAge());

  useEffect(() => {
    setAge(CalculateAge());
  }, []);
  const [isFollowed, setIsFollowed] = React.useState(false);

  const ButtonRender = () => {
    if (isFollowed) {
      return (
        <Button
          className="bg-transparent text-foreground border-default-200"
          color="secondary"
          radius="full"
          size="sm"
          startContent={<RiVerifiedBadgeFill />}
          variant="bordered"
          onPress={() => setIsFollowed(!isFollowed)}
        >
          Deixar de seguir
        </Button>
      );
    } else {
      return (
        <Button
          color="secondary"
          radius="full"
          size="sm"
          startContent={<FaInstagram />}
          variant="shadow"
          onPress={() => setIsFollowed(!isFollowed)}
        >
          <a
            href="https://www.instagram.com/munardt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguir
          </a>
        </Button>
      );
    }
  };

  return (
    <section>
      <Card className="w-full h-[300px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Gabriel Arthur Mundt
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @munardt
              </h5>
            </div>
          </div>
          <ButtonRender />
        </CardHeader>
        <CardBody>
          <p>
            Tenho {age} anos e atuo como Desenvolvedor Front-End Pleno, com mais
            de 1 ano e meio de experiência em um sistema ERP construído do zero.
            Especializado em Angular e cada vez mais envolvido com o ecossistema
            React, gosto de explorar o equilíbrio entre performance, design e
            experiência do usuário.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
