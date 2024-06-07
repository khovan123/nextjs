import React from "react";

export default function LandingHeroSection({ children }) {
  return (
    <section className="bg-slate-900 h-[95vh] w-full py-12 flex items-center justify-center">
      {children}
    </section>
  );
}
