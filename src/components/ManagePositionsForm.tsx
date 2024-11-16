'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { VaultPosition } from '@/types';
import { gql, useQuery } from '@apollo/client';
import { Info } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import FinalizeTransaction from './FinalizeTransaction';
import MaxSupplyToken from './MaxSupplyToken';

export default function ManagePositionsForm({ selectedVault }: Readonly<{ selectedVault: VaultPosition | null }>) {
  const { isConnected } = useAccount();
  const [isSupply, setIsSupply] = useState(true);
  const [amount, setAmount] = useState('');
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const decimalRegex = /^\d*\.?\d*$/;
    if (decimalRegex.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  const handleMax = (max: string) => {
    setAmount(max);
  };
  return (
    <div
      className={cn(
        'flex flex-col justify-between items-center bg-[#1f2324] p-4 gap-4 h-full',
        'border rounded-xl border-[#456DB5]'
      )}
    >
      {selectedVault ?
      (<>
        <div className="flex flex-col w-full gap-4 justify-between items-center">
        <div className="flex items-center gap-2">
            <Image src={selectedVault.vault.asset?.logoURI || ""} alt={selectedVault.vault.name} width={48} height={48} />
            <h2 className="text-2xl">{selectedVault.vault.name}</h2>
          </div>
          <div className="w-full p-1.5 bg-[#343a3a] rounded-[28px] flex justify-between gap-2">
            <span
              className={cn(
                'text-2xl w-full text-center  rounded-[24px] py-3 cursor-pointer',
                isSupply ? 'bg-[#456DB5]' : 'bg-[#2f3434]'
              )}
              onClick={() => setIsSupply(true)}
            >
              Supply
            </span>
            <span
              className={cn(
                'text-2xl w-full text-center  rounded-[24px] py-3 cursor-pointer',
                isSupply ? 'bg-[#2f3434]' : 'bg-[#456DB5]'
              )}
              onClick={() => setIsSupply(false)}
            >
              Withdraw
            </span>
          </div>
          <div className="flex flex-col justify-between bg-[#343a3a] w-full p-4 gap-4 rounded-xl">
      <div className="relative">
        <Input value={amount} onChange={handleAmountChange} placeholder="0.0" className="text-base" />
        </div>
        <div className="flex justify-end items-baseline gap-2 mr-4 text-sm min-h-5">
        <MaxSupplyToken asset={selectedVault.vault.asset} handleMax={handleMax} />
      </div>
        </div>

        </div>
        <div className="flex flex-col gap-4 justify-between items-center">
        <span className="text-[#919AAF] text-center">
          Morpho is the most efficient, secure, and flexible lending protocol on Ethereum.
        </span>
        <FinalizeTransaction title={isSupply ? "Confirm Supply" : "Confirm Withdraw"} disabled={false}/>
      </div>
      </>) : 
      (<>
      <h1 className="text-4xl font-[500] text-[#456DB5]">Manage Positions</h1>
        <span className="absolute text-center text-[#355180] text-4xl px-24 pt-28">
          Please select a position to see management options
        </span>
        <div className="flex flex-col gap-4 justify-between items-center">
        <span className="text-[#919AAF] text-center">
          Morpho is the most efficient, secure, and flexible lending protocol on Ethereum.
        </span>
        <FinalizeTransaction title={"Select a Position"} disabled={true}/>
      </div>
      </>)}
    </div>
  );
}
