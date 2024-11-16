'use client';

// TODO: ! in encodedfunctiondata
import { useAppContext } from '@/contexts/AppContext';
import { useMorphoChainAgnosticBundlerV2 } from '@/hooks/useMorphoChainAgnosticBundlerV2';
import { cn } from '@/lib/utils';
import abi from '@/shared/abi/MorphoChainAgnosticBundlerV2.json';
import USDCABI from '@/shared/abi/USDC.json';
import { BundlerAction } from '@morpho-org/morpho-blue-bundlers/pkg';
import { Signature } from 'ethers';
import { useState } from 'react';
import { encodeFunctionData } from 'viem';
import {
  useAccount,
  useBlock,
  useBlockNumber,
  useChainId,
  useReadContracts,
  useSendTransaction,
  useSignTypedData,
  useWaitForTransactionReceipt
} from 'wagmi';
import FinalizeTransaction from './FinalizeTransaction';
import SelectSupplyToken from './SelectSupplyToken';

export default function EarnForm() {
  const { signTypedDataAsync } = useSignTypedData();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  // TODO: how are we setting amount as bigint?
  const [amount, setAmount] = useState('');
  const { selectedAsset, selectedVault } = useAppContext();
  const { data: hash, error, sendTransactionAsync } = useSendTransaction();
  const bundlerAddress = useMorphoChainAgnosticBundlerV2();
  const { data: block } = useBlock();
  const USDC = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';
  const WETH = '0x4200000000000000000000000000000000000006';

  const deadline = (block?.timestamp ?? 0n) + 3600n;
  // TODO: check if decimals are being handled correctly when input usdc is 6 decimals
  const valueApproved = 1000000n;

  // TODO: get selectedAsset address
  const { data } = useReadContracts({
    contracts: [
      {
        address: USDC,
        abi: USDCABI,
        functionName: 'nonces',
        args: [address]
      }
    ]
  });
  const nonce = data?.[0]?.result ?? 0n;

  const finalizeTransaction = async () => {
    console.log('getting signature');

    const permitSingle = {
      details: {
        token: WETH,
        amount: valueApproved,
        nonce: Number(nonce),
        expiration: 2n ** 48n - 1n
      },
      spender: bundlerAddress,
      sigDeadline: 2n ** 48n - 1n
    };

    const signature = Signature.from(address);
    console.log('signature', signature);
    const data = encodeFunctionData({
      abi,
      functionName: 'multicall',
      args: [[BundlerAction.wrapNative(valueApproved), BundlerAction.approve2(permitSingle, signature, false)]]
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
        <FinalizeTransaction disabled={!(amount !== '' && selectedVault)} finalizeTransaction={finalizeTransaction} />
      </div>
    </div>
  );
}
