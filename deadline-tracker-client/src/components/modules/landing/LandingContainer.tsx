import React from "react";
import { cn } from "@/lib/utils";
export default function LandingContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section
      className={cn(
        "w-full h-screen overflow-y-scroll snap-mandatory scroll-smooth snap-y overflow-x-hidden"
      )}
    >
      {children}
    </section>
  );
}
