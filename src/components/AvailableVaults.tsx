'use client';

import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import Vault from './Vault';
import VaultCard from './VaultCard';

export default function AvailableVaults({ availableVaults }: Readonly<{ availableVaults: VaultPosition[] }>) {
  const { selectedAsset } = useAppContext();

  return (
    <div
      className={cn(
        'w-full h-full rounded-xl grid justify-between items-center',
        'gap-8 relative',
        (selectedAsset?.highAPY1Vault && selectedAsset?.highAPY2Vault) 
        || (selectedAsset?.highAPY1Vault && selectedAsset?.highTVLVault) 
        || (selectedAsset?.highAPY1Vault && selectedAsset?.trustedCuratorVault)
        || (selectedAsset?.highTVLVault && selectedAsset?.trustedCuratorVault) ? 'grid-cols-2' : 'grid-cols-1'
      )}
    >
      {selectedAsset ? (
        <>
          {selectedAsset.highAPY1Vault && (
            <Vault vaultType="apy" asset={selectedAsset} vault={selectedAsset.highAPY1Vault} />
          )}
          {selectedAsset.highAPY2Vault && (
            <Vault vaultType="apy" asset={selectedAsset} vault={selectedAsset.highAPY2Vault} />
          )}
          {selectedAsset.highTVLVault && (
            <Vault vaultType="tvl" asset={selectedAsset} vault={selectedAsset.highTVLVault} />
          )}
          {selectedAsset.trustedCuratorVault && (
            <Vault vaultType="curator" asset={selectedAsset} vault={selectedAsset.trustedCuratorVault} />
          )}
        </>
      ) : (
        <>
          <span className="absolute text-center text-[#355180] text-5xl px-32 leading-loose">
            Please Select at least one token to see positions
          </span>
          {/* TODO: look for grid-cols-1 for logic */}
          {[0, 1, 2, 3].map((item) => (
            <VaultCard key={item} />
          ))}
        </>
      )}
    </div>
  );
}
