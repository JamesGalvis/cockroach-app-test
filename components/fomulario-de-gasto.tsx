"use client";

import * as z from "zod";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaDeGasto } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { actualizarGasto, crearGasto } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Gasto } from "@prisma/client";

interface FormularioDeGastoProps {
  type?: "Crear" | "Actualizar";
  datosIniciales?: Gasto | null;
}

function FormularioDeGasto({
  type = "Crear",
  datosIniciales,
}: FormularioDeGastoProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof SchemaDeGasto>>({
    resolver: zodResolver(SchemaDeGasto),
    defaultValues: {
      titulo: datosIniciales?.titulo || "",
      descripcion: datosIniciales?.descripccion || "",
      monto: datosIniciales?.monto || 0,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const handleSubmit = async (values: z.infer<typeof SchemaDeGasto>) => {
    try {
      if (type === "Crear") {
        const { success, error } = await crearGasto(values);

        if (error) {
          toast.error(error);
        }

        if (success) {
          toast.success(success);
          router.push("/");
          form.reset();
        }
      } else if (datosIniciales) {
        const { success, error } = await actualizarGasto(
          values,
          datosIniciales.id
        );

        if (error) {
          toast.error(error);
        }

        if (success) {
          toast.success(success);
          router.push("/");
          form.reset();
        }
      }
    } catch (error) {
      toast.error("Algo salio mal!");
    }
  };

  return (
    <div className="py-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descripcion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripcion</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(parseFloat(value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 mr-3 animate-spin" />}
            Registrar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormularioDeGasto;
