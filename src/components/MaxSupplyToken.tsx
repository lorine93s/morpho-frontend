'use client';

import { type Asset } from '@/types';
import { formatUnits } from 'viem';
import { useAccount, useReadContract } from 'wagmi';
import { Loading } from './Loading';

export default function MaxSupplyToken({ asset, symbol, handleMax }: { asset: Asset; symbol?: string, handleMax: (max: string) => void }) {
  const { address } = useAccount();
  const { data, isLoading } = useReadContract({
    abi: [
      {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [{ type: 'address' }],
        outputs: [{ type: 'uint256' }]
      }
    ],
    address: asset.address,
    functionName: 'balanceOf',
    args: [address as `0x${string}`]
  });

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <span className="text-[#878888]">Balance {formatUnits(data ?? 0n, asset.decimals)}{asset.symbol ? ` ${asset.symbol}` : ''}</span>
      <button className="text-[#456DB5]" onClick={() => handleMax(formatUnits(data ?? 0n, asset.decimals))}>
        Max
      </button>
    </>
  );
}
