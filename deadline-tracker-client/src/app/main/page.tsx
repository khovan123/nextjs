import React from "react";
import LandingContainer from "../../core/landing/LandingContainer";
import LandingHeader from "../../core/landing/header/LandingHeader";
import LandingMain from "../../core/landing/main/LandingMain";
import LandingIntro from "../../core/landing/main/LandingIntro";
import LandingFooter from "../../core/landing/footer/LandingFooter";

export function LandingPage() {
  return (
    <main className="h-full w-screen">
      <LandingContainer>
        <LandingHeader />
        <LandingMain />
        <LandingIntro />
        <LandingFooter />
      </LandingContainer>
    </main>
  );
}
