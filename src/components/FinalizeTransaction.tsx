'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function FinalizeTransaction({
  disabled = false,
  title = 'Finalize transaction'
}: {
  disabled?: boolean;
  title?: string;
}) {
  return (
    <ConnectButton.Custom>
      {({ account, openConnectModal, mounted }) => {
        const isConnected = mounted && account;
        if (!isConnected) {
          return (
            <button onClick={openConnectModal} className="text-2xl w-full rounded-[16px] bg-[#2c2d2d] py-2">
              Connect Wallet
            </button>
          );
        }
        // TODO: toast here
        return (
          <button className="text-2xl w-full rounded-[16px] bg-[#2c2d2d] py-2" disabled={disabled}>
            {title}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}
