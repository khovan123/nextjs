import React from "react";
import LandingContainer from "../../components/modules/landing/LandingContainer";
import LandingHeader from "../../components/modules/landing/header/LandingHeader";
import LandingMain from "../../components/modules/landing/main/LandingMain";
import LandingFooter from "../../components/modules/landing/footer/LandingFooter";

export function LandingPage() {
  return (
    <LandingContainer>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </LandingContainer>
  );
}
