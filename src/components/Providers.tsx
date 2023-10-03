"use client";
import React from "react";
import { UseInkProvider } from "useink";
import { ShibuyaTestnet } from "useink/chains";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <UseInkProvider
        config={{
          dappName: "OkAlice Liquid Staking Platform",
          chains: [ShibuyaTestnet],
        }}
      >
        {children}
      </UseInkProvider>
    </>
  );
};

export default Providers;
