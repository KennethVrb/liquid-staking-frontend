"use client";

import Button from "@/ui-kit/Button";
import Modal from "@/ui-kit/Modal";
import Image from "next/image";
import { useState } from "react";
import { useWallet, useAllWallets } from "useink";

function ConnectWallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { account, connect, disconnect } = useWallet();
  const wallets = useAllWallets();

  if (account) {
    return (
      <Button onClick={disconnect}>
        {account?.name || `${account.address.slice(0, 6)}...`}
      </Button>
    );
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Connect Wallet</Button>
      <Modal
        title="Connect Wallet"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wallets.map((w) => (
            <button
              key={w.title}
              onClick={() =>
                w.installed
                  ? connect(w.extensionName)
                  : window.open(w.installUrl)
              }
              className="flex flex-col items-center border-2 border-primary p-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-2">
                <Image
                  src={w.logo.src}
                  alt={w.logo.alt}
                  width={22}
                  height={22}
                />
              </div>
              <span className="text-primary font-semibold">
                {w.installed ? `Connect to ${w.title}` : `Install ${w.title}`}
              </span>
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default ConnectWallet;
