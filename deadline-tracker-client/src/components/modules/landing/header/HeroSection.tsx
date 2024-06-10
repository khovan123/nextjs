import React from "react";
import { cn } from "@/lib/utils";
export default function HeroSection({ children }) {
  return (
    <section className={cn("w-screen h-screen place-items-center")}>
      {children}
    </section>
  );
}
