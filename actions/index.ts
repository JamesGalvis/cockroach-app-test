"use server";

import * as z from "zod";
import { SchemaDeGasto } from "@/schemas";
import { database } from "@/utils/db";
import { revalidatePath } from "next/cache";

export const obtenerTodosLosGastos = async () => {
  const gastos = await database.gasto.findMany({
    orderBy: {
      fechaDeCreacion: "desc",
    },
  });

  return gastos;
};

export const obtenerGastoPorId = async (id: string) => {
  const gasto = await database.gasto.findUnique({
    where: {
      id,
    },
  });

  return gasto;
};

export const crearGasto = async (values: z.infer<typeof SchemaDeGasto>) => {
  try {
    await database.gasto.create({
      data: {
        titulo: values.titulo,
        descripccion: values.descripcion,
        monto: values.monto,
      },
    });

    revalidatePath("/");
    return { success: "Gasto registrado!" };
  } catch (error) {
    return { error: "Algo salio mal!" };
  }
};

export const actualizarGasto = async (
  values: z.infer<typeof SchemaDeGasto>,
  idDelGasto: string
) => {
  try {
    await database.gasto.update({
      where: {
        id: idDelGasto,
      },
      data: {
        titulo: values.titulo,
        descripccion: values.descripcion,
        monto: values.monto,
      },
    });

    revalidatePath("/");
    return { success: "Gasto actualizado!" };
  } catch (error) {
    return { error: "Algo salio mal!" };
  }
};

export const eliminarGasto = async (isDelGasto: string) => {
  try {
    await database.gasto.delete({
      where: {
        id: isDelGasto,
      },
    });

    revalidatePath("/");
    return { success: "Gasto eliminado!" };
  } catch (error) {
    return { error: "Algo salio mal!" };
  }
};
