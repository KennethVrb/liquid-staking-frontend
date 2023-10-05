"use client";

import Image from "next/image";
import { useState } from "react";
import { useWallet, useAllWallets } from "useink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/ui-kit/buttons";
import Modal from "@/ui-kit/Modal";
import DropdownButton from "@/ui-kit/buttons/DropdownButton";

function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { account, connect, disconnect } = useWallet();
  const wallets = useAllWallets();

  if (account) {
    return (
      <DropdownButton
        icon={faWallet}
        text={`${account.address.slice(0, 5)}...${account.address.slice(-5)}`}
        dropdownHeader={
          !!account.name && (
            <div className="px-4 py-3 text-gray-900 dark:text-white">
              <div>Wallet name</div>
              <div className="font-medium truncate">{account.name}</div>
            </div>
          )
        }
        dropdownActions={[
          {
            text: "Disconnect",
            onClick: disconnect,
          },
        ]}
      />
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
