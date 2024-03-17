import { obtenerGastoPorId } from "@/actions";
import FormularioDeGasto from "@/components/fomulario-de-gasto";

interface ActualizarGastoPage {
  params: { idGasto: string };
}

async function ActualizarGastoPage({ params }: ActualizarGastoPage) {
  const gasto = await obtenerGastoPorId(params.idGasto);

  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4">
      <div className="flex flex-col justify-start items-start py-4 px-6 h-fit w-[400px] border rounded-md">
        <h1 className="text-2xl font-bold">Actualiza tu gasto</h1>
        <FormularioDeGasto datosIniciales={gasto} type="Actualizar" />
      </div>
    </div>
  );
}

export default ActualizarGastoPage;
