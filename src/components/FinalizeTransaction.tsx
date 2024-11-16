'use client';

import { cn } from '@/lib/utils';
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
            <button onClick={openConnectModal} className="text-2xl w-full rounded-[16px] bg-[#456DB5] py-2">
              Connect Wallet
            </button>
          );
        }
        // TODO: toast here
        return (
          <button
            className={cn('text-2xl w-full rounded-[16px] py-2', disabled ? 'bg-[#2c2d2d]' : 'bg-[#456DB5]')}
            disabled={disabled}
          >
            {title}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}
