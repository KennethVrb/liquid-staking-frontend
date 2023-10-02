"use client";

import React, { useState } from "react";
import { usePolkadotApi } from "../contexts/PolkadotContext";
import Button from "@/ui-kit/buttons/Button";

const Stake: React.FC = () => {
  const { api } = usePolkadotApi();
  const [amount, setAmount] = useState<number>(0);

  const handleStake = async () => {};

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold text-center">Stake your DOTs</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount of DOTs"
        className="p-2 py-3 border rounded-2xl w-full"
      />
      <Button onClick={handleStake} className="w-full">
        Stake
      </Button>
    </div>
  );
};

export default Stake;
