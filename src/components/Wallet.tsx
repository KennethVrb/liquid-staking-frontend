"use client";

import Image from "next/image";
import { useState } from "react";
import { useWallet, useAllWallets } from "useink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import Button from "@/ui-kit/Button";
import Modal from "@/ui-kit/Modal";

function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { account, connect, disconnect } = useWallet();
  const wallets = useAllWallets();

  if (account) {
    return (
      <div className="relative group inline-flex items-center px-4 py-2 border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={faWallet} className="mr-2" />
        <span>{`${account.address.slice(0, 5)}...${account.address.slice(
          -5
        )}`}</span>
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 divide-y min-w-[155px] rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition p-2">
          {!!account.name && (
            <div className="px-4 py-3 text-gray-900 dark:text-white">
              <div>Wallet name</div>
              <div className="font-medium truncate">{account.name}</div>
            </div>
          )}
          <button
            onClick={disconnect}
            className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Disconnect
          </button>
        </div>
      </div>
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
              onClick={() => {
                setIsModalOpen(false);

                w.installed
                  ? connect(w.extensionName)
                  : window.open(w.installUrl);
              }}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-2">
                <Image
                  src={w.logo.src}
                  alt={w.logo.alt}
                  width={40}
                  height={40}
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

export default Wallet;
