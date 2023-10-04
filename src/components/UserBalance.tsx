"use client";

import React, { useEffect, useState } from "react";
import { useApi, useBalance, useWallet } from "useink";
import { planckToDecimalFormatted } from "useink/utils";

const UserBalance: React.FC = () => {
  const apiPromise = useApi("shibuya-testnet");
  const { account } = useWallet();

  const [chainBalance, setChainBalance] = useState<string | null>(null);
  const [liquidBalance, setUserLiquidBalance] = useState<string | null>(null);
  const [userRewards, setUserRewards] = useState<string | null>(null);

  const balance = useBalance(account);

  useEffect(() => {
    if (account) {
      setChainBalance(
        balance
          ? planckToDecimalFormatted(balance.freeBalance, {
              api: apiPromise?.api,
            }) || null
          : null
      );
    } else {
      setChainBalance(null);
      setUserLiquidBalance(null);
      setUserRewards(null);
    }
  }, [account, balance, apiPromise]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-center">Your Wallet</h2>
      <div className="flex flex-col space-y-2 border-t border-b border-gray-200 pt-2 pb-2">
        <div className="flex justify-between">
          <strong>Chain Balance:</strong>
          {chainBalance}
        </div>
        <div className="flex justify-between">
          <strong>Liquid Tokens:</strong> {liquidBalance}
        </div>
        <div className="flex justify-between">
          <strong>Rewards:</strong> {userRewards}
        </div>
      </div>
    </div>
  );
};

export default UserBalance;
