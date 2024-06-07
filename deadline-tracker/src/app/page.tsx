"use client";
import React from "react";
import * as S from "./styles";
import NavHeader from "@/components/NavHeader";

export default function LightningPage() {
  return (
    <>
      <S.LightningContainer>
        <S.HeaderContainer>
          <S.MainHeader>
            <NavHeader />
            <S.ButtonCustom type="primary">Getting free now!</S.ButtonCustom>
          </S.MainHeader>
        </S.HeaderContainer>
        <S.MainContainer>
          <p>Hello World!</p>
        </S.MainContainer>
      </S.LightningContainer>
    </>
  );
}
