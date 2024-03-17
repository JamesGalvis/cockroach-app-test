import { obtenerTodosLosGastos } from "@/actions";
import InfoDeGasto from "@/components/info-de-gasto";

async function Home() {
  const gastos = await obtenerTodosLosGastos();

  return (
    <div>
      <div className="flex flex-col flex-1 py-6 px-4 space-y-5">
        <h1 className="text-2xl font-bold">Gastor recientes</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {gastos.length === 0 && (
            <div>
              <p className="text-lg text-white/70">
                No hay gastos registrados aun
              </p>
            </div>
          )}
          {gastos.length > 0 &&
            gastos.map((gasto) => (
              <InfoDeGasto
                key={gasto.id}
                titulo={gasto.titulo}
                descripcion={gasto.descripccion}
                monto={gasto.monto}
                id={gasto.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
