import { cn, formatCurrencyCompact, formatDigitalCurrency } from '@/lib/utils';
import type { Asset, VaultItem } from '@/types';
import { Info } from 'lucide-react';
import Image from 'next/image';
import { formatUnits } from 'viem';
import VaultCard from './VaultCard';
import VaultImage from './VaultImage';

export default function Vault({
  vaultType,
  asset,
  vault
}: Readonly<{ vaultType: 'apy' | 'tvl' | 'curator'; asset: Asset; vault: VaultItem }>) {
  const totalCollateral = vault.state.allocation.filter(
    (collateral) => collateral.supplyAssets > 0 && collateral.market.collateralAsset?.logoURI
  );
  return (
    <VaultCard>
      <div className="flex flex-col justify-between items-center h-full gap-4 p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Image src={asset.logoURI} alt={vault.name} width={28} height={28} />
            <span>{vault.name}</span>
            <a href={`https://app.morpho.org/vault?vault=${vault.address}&network=${vault.network}`} target="_blank">
              <Info className="w-6 h-6 text-[#878888]" />
            </a>
          </div>
          <div className="flex bg-[#2b2e2f] rounded-full py-2 px-4 items-center justify-start gap-2">
            {vaultType === 'apy' && (
              <>
                <div className="rounded-full h-2 w-2 bg-[#dc5f27]" />
                <span className="text-sm">High APY</span>
              </>
            )}
            {vaultType === 'tvl' && (
              <>
                <div className="rounded-full h-2 w-2 bg-[#7fc241]" />
                <span className="text-sm">High TVL</span>
              </>
            )}
            {vaultType === 'curator' && (
              <>
                <div className="rounded-full h-2 w-2 bg-[#459eb2]" />
                <span className="text-sm">Trusted Curator</span>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Total Supply</span>
          <div className="flex items-center gap-1">
            <span>
              {formatDigitalCurrency(Number(formatUnits(BigInt(vault.state.totalAssets), asset.decimals)))}&nbsp;
              {asset.symbol}
            </span>
            <span className="bg-[#363b3b] rounded-md text-xs p-1">
              {formatCurrencyCompact(vault.state.totalAssetsUsd)}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Net APY</span>
          <span>{(vault.state.netApy * 100).toFixed(2)}%</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>{vault.curators.length > 1 ? 'Curators' : 'Curator'}</span>
          <div className="flex items-center gap-2">
            {vault.curators.map((curator) => (
              <a className="flex items-center" key={curator.name} href={curator.url} target="_blank">
                <Image src={curator.image} alt={curator.name} width={28} height={28} className="mr-1" />
                <span>{curator.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Collateral</span>
          <div
            className={cn(
              'flex items-center flex-wrap justify-center',
              totalCollateral.length > 9
                ? 'mr-1 max-w-[180px] flex-wrap leading-none'
                : totalCollateral.length > 1
                  ? 'mr-3'
                  : ''
            )}
          >
            {totalCollateral.map((collateral) => (
              <VaultImage
                collateral={collateral}
                totalCollateral={totalCollateral}
                key={collateral.market.collateralAsset!.logoURI + collateral.supplyAssets}
              />
            ))}
          </div>
        </div>
        <button className="text-xl w-full rounded-[16px] bg-[#456DB5] py-2">Select Position</button>
      </div>
    </VaultCard>
  );
}
