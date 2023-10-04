"use client";
import React, { useState } from "react";
import { useApi } from "useink";
import { ChainId } from "useink/chains";

const ChainSwitcher: React.FC = () => {
  const [selectedChain, setSelectedChain] =
    useState<ChainId>("shibuya-testnet");
  const api = useApi(selectedChain);

  const handleChainChange = (chain: ChainId) => {
    setSelectedChain(chain);
  };

  const getStatusColor = () =>
    !api ? "bg-red-500" : api?.api?.isConnected ? "bg-green-500" : "bg-red-500";

  return (
    <div className="flex items-center space-x-2">
      <span className={`${getStatusColor()} rounded-full w-4 h-4`}></span>
      <select
        onChange={(e) => handleChainChange(e.target.value as ChainId)}
        value={selectedChain}
      >
        <option value="shibuya-testnet">Shibuya</option>
        <option value="polkadot">PolkadotJS</option>
      </select>
    </div>
  );
};

export default ChainSwitcher;
