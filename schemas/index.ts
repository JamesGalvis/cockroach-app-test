import * as z from "zod";

export const SchemaDeGasto = z.object({
  titulo: z.string().min(3, {
    message: "El titulo es requerido",
  }),
  descripcion: z.string().min(3, {
    message: "La descripcion es requerido",
  }),
  monto: z.number().min(0).nonnegative(),
});
