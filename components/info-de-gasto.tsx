"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Acciones from "./acciones";

interface InfoDeGastoProps {
  titulo: string;
  descripcion: string;
  monto: string | number;
  id: string;
}

function InfoDeGasto({ descripcion, monto, titulo, id }: InfoDeGastoProps) {
  return (
    <Card className="w-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{titulo}</CardTitle>
            <CardDescription>{descripcion}</CardDescription>
          </div>
          <Acciones idDelGasto={id} />
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-base text-gray-300 font-bold">${monto}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoDeGasto;
