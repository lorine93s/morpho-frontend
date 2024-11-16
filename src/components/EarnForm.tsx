'use client';

import { useAppContext } from '@/contexts/AppContext';
import { useMorphoChainAgnosticBundlerV2 } from '@/hooks/useMorphoChainAgnosticBundlerV2';
import { cn } from '@/lib/utils';
import abi from '@/shared/abi/MorphoChainAgnosticBundlerV2.json';
import { BundlerAction } from '@morpho-org/morpho-blue-bundlers/pkg';
import { useState } from 'react';
import { encodeFunctionData, parseEther } from 'viem';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import FinalizeTransaction from './FinalizeTransaction';
import SelectSupplyToken from './SelectSupplyToken';

export default function EarnForm() {
  const { address, isConnected } = useAccount();
  // TODO: how are we setting amount as bigint?
  const [amount, setAmount] = useState('');
  const { selectedVault } = useAppContext();
  const { data: hash, error, sendTransactionAsync } = useSendTransaction();
  const bundlerAddress = useMorphoChainAgnosticBundlerV2();
  console.log('hash', hash);
  console.log('error', error);

  const finalizeTransaction = async () => {
    console.log('finalizeTransaction');
    const data = encodeFunctionData({
      abi,
      functionName: 'multicall',
      args: [
        [
          BundlerAction.wrapNative(1000000n),
          BundlerAction.erc20Transfer(
            '0x4200000000000000000000000000000000000006',
            '0x75336b7F786dF5647f6B20Dc36eAb9E27D704894',
            1000000n
          )
        ]
      ]
    });

    await sendTransactionAsync({
      to: bundlerAddress,
      data: data,
      value: 1000000n
    });
  };

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
            <SelectSupplyToken amount={amount} setAmount={setAmount} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 justify-between items-center">
        <span className="text-[#919AAF] text-center">
          Morpho is the most efficient, secure, and flexible lending protocol on Ethereum.
        </span>
        <FinalizeTransaction disabled={false} finalizeTransaction={finalizeTransaction} />
      </div>
    </div>
  );
}
