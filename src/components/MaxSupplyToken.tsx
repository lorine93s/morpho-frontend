'use client';

import { useWETH } from '@/hooks/useWeth';
import { type Asset } from '@/types';
import { formatEther, formatUnits } from 'viem';
import { useAccount, useBalance, useReadContract } from 'wagmi';
import { Loading } from './Loading';

export default function MaxSupplyToken({ asset, handleMax }: { asset: Asset; handleMax: (max: string) => void }) {
  const { address } = useAccount();
  const WETH = useWETH();
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
  const { data: ethBalance } = useBalance({ address });
  const balance =
    asset.address === WETH ? formatEther(ethBalance?.value ?? 0n) : formatUnits(data ?? 0n, asset.decimals);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <span className="text-[#878888]">
        Balance&nbsp;
        {balance}
      </span>
      <button className="text-[#456DB5]" onClick={() => handleMax(balance)}>
        Max
      </button>
    </>
  );
}
