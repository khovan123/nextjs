import React from "react";
import { cn } from "@/lib/utils";
export default function HeroSection({ children }) {
  return (
    <section
      className={cn("w-screen h-screen snap-start shrink-0 place-items-center")}
    >
      {children}
    </section>
  );
}
