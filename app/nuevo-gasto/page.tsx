import FormularioDeGasto from "@/components/fomulario-de-gasto";
import React from "react";

function PaginaDeNuevoGasto() {
  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4">
      <div className="flex flex-col justify-start items-start py-4 px-6 h-fit w-[400px] border rounded-md">
        <h1 className="text-2xl font-bold">Nuevo gasto</h1>
        <p className="text-white/50">
          Puedes modificar tus gasto en cualquier momento
        </p>
        <FormularioDeGasto />
      </div>
    </div>
  );
}

export default PaginaDeNuevoGasto;
