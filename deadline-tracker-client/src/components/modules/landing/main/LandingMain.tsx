"use client";
import * as React from "react";
import SectionTestimonial from "./SectionTestimonial";
import SectionAboutUs from "./SectionAboutUs";
import { cn } from "@/lib/utils";
export default function LandingMain() {
  return (
    <section
      className={cn("w-full h-screen snap-start shrink-0 place-items-center")}
    >
      <main className="flex flex-col items-center justify-center gap-10 mx-40 py-10 h-full">
        <SectionAboutUs />
        <SectionTestimonial />
      </main>
    </section>
  );
}
