"use client";

import React, { useState } from "react";
import { usePolkadotApi } from "@/contexts";

const UserWallet: React.FC = () => {
  const { api } = usePolkadotApi();
  const [userDots, setuserDots] = useState(0);
  const [userLDots, setuserLDots] = useState(0);
  const [userRewards, setuserRewards] = useState(0);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-center">Your Wallet</h2>
      <div className="flex flex-col space-y-2 border-t border-b border-gray-200 pt-2 pb-2">
        <div className="flex justify-between">
          <strong>DOTs:</strong> {userDots}
        </div>
        <div className="flex justify-between">
          <strong>lDOTs:</strong> {userLDots}
        </div>
        <div className="flex justify-between">
          <strong>Rewards:</strong> {userRewards}
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
