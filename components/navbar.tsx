"use client";

import { HandCoins, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b">
      <Link href="/" className="text-lg text-white/90 font-bold">
        <HandCoins className="h-6 w-6 inline-block mr-3" /> Gestor de gastos
      </Link>
      <Button
        size="sm"
        onClick={() => router.push("/nuevo-gasto")}
        className={cn(pathname === "/nuevo-gasto" && "hidden")}
      >
        <PlusIcon className="h-5 w-5 sm:mr-2" />
        <span className="max-sm:hidden">Nuevo gasto</span>
      </Button>
    </div>
  );
}

export default Navbar;
