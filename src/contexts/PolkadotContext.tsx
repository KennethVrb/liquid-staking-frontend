"use client";

import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface PolkadotContextType {
  api: ApiPromise | null;
}

const PolkadotContext = createContext<PolkadotContextType | undefined>(
  undefined
);

interface PolkadotProviderProps {
  children: ReactNode;
}

export function PolkadotProvider({ children }: PolkadotProviderProps) {
  const [api, setApi] = useState<ApiPromise | null>(null);

  useEffect(() => {
    const wsProvider = new WsProvider("wss://kusama-rpc.polkadot.io");
    const apiPromise = new ApiPromise({ provider: wsProvider });

    apiPromise.isReady.then(() => {
      setApi(apiPromise);
    });

    return () => {
      // apiPromise.disconnect().catch((e) => console.error(e));
    };
  }, []);

  const contextValue = useMemo(() => ({ api }), [api]);

  return (
    <PolkadotContext.Provider value={contextValue}>
      {children}
    </PolkadotContext.Provider>
  );
}

export function usePolkadotApi(): PolkadotContextType {
  const context = useContext(PolkadotContext);
  if (!context) {
    throw new Error("usePolkadotApi must be used within a PolkadotProvider");
  }
  return context;
}
