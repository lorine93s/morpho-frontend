'use client';

import { cn } from '@/lib/utils';
import { useAccount } from 'wagmi';
import FinalizeTransaction from './FinalizeTransaction';
import SelectSupplyToken from './SelectSupplyToken';

export default function EarnForm() {
  const { isConnected } = useAccount();

  return (
    <div
      className={cn(
        'flex flex-col justify-between items-center bg-[#1f2324] p-4 gap-4 h-full',
        'border rounded-xl border-[#456DB5]'
      )}
    >
      <div className="flex flex-col w-full gap-4 justify-between items-center">
        <h1 className="text-4xl font-[500] text-[#456DB5]">Earn</h1>
        {isConnected && (
          <>
            <SelectSupplyToken />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 justify-between items-center">
        <span className="text-[#919AAF] text-center">
          Morpho is the most efficient, secure, and flexible lending protocol on Ethereum.
        </span>
        <FinalizeTransaction />
      </div>
    </div>
  );
}
