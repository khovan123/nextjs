import React from "react";

export default function LandingContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="w-full h-full flex flex-col justify-start items-center gap-6">
      {children}
    </section>
  );
}
