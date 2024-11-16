'use client';

import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import Vault from './Vault';
import VaultCard from './VaultCard';

export default function AvailableVaults() {
  const { selectedAsset } = useAppContext();

  return (
    <div
      className={cn(
        'w-full h-full border border-[#456DB5] bg-[#1B1D1F] rounded-xl grid grid-cols-2 justify-between items-center',
        'gap-8 relative'
      )}
    >
      {selectedAsset ? (
        <>
          {selectedAsset.highAPY1 && <Vault vaultType="apy" asset={selectedAsset} vault={selectedAsset.highAPY1} />}
          {selectedAsset.highAPY2 && <Vault vaultType="apy" asset={selectedAsset} vault={selectedAsset.highAPY2} />}
          {selectedAsset.highTVL && <Vault vaultType="tvl" asset={selectedAsset} vault={selectedAsset.highTVL} />}
          {selectedAsset.trustedCurator && (
            <Vault vaultType="curator" asset={selectedAsset} vault={selectedAsset.trustedCurator} />
          )}
        </>
      ) : (
        <>
          <span className="absolute text-center text-[#355180] text-5xl px-32 leading-loose">
            Please Select at least one token to see positions
          </span>
          {[0, 1, 2, 3].map((item) => (
            <VaultCard key={item} />
          ))}
        </>
      )}
    </div>
  );
}
