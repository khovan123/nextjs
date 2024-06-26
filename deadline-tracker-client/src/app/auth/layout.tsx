import React from "react";
export default function AuthLayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-slate-900 w-screen h-screen">{children}</main>;
}
