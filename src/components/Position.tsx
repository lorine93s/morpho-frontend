import type { Asset, VaultItem, VaultPosition } from '@/types';
import { Info } from 'lucide-react';
import Image from 'next/image';
import PositionCard from './PositionCard';

export default function Position({
  vaultPosition
}: Readonly<{ vaultPosition: VaultPosition }>) {
  return (
    <PositionCard>
      <div className="flex flex-col justify-between items-center h-full gap-4 p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Image src={vaultPosition.vault.asset?.logoURI || ""} alt={vaultPosition.vault.name} width={28} height={28} />
            <span>{vaultPosition.vault.name}</span>
            <a href={`https://app.morpho.org/vault?vault=${vaultPosition.vault.address}&network=${vaultPosition.vault.network}`} target="_blank">
              <Info className="w-6 h-6 text-[#878888]" />
            </a>
          </div>
        </div>
        <div className="inline w-auto bg-[#343a3a] min-w-60 p-4 gap-4 rounded-xl text-3xl text-center">
          ${vaultPosition.assetsUsd.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
        </div>

        <div className="flex justify-between items-center w-full">
          <span>Amount Supplied</span>
          <span>{vaultPosition.assets / 10 ** vaultPosition.vault.asset?.decimals || 0} {vaultPosition.vault.asset?.symbol}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Net APY</span>
          <span>{(vaultPosition.vault.dailyApys?.netApy * 100).toFixed(2)}%</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>{vaultPosition.vault.metadata && vaultPosition.vault.metadata.curators.length > 1 ? 'Curators' : 'Curator'}</span>
          <div className="flex items-center gap-2">
            {vaultPosition.vault.metadata?.curators.map((curator) => (
              <a className="flex items-center" key={curator.name} href={curator.link} target="_blank">
                <Image src={curator.image} alt={curator.name} width={28} height={28} />
                <span>{curator.name}</span>
              </a>
            ))}
          </div>
        </div>
        <button className="text-xl w-full rounded-[16px] bg-[#456DB5] py-2">Select Position</button>
      </div>
    </PositionCard>
  );
}
