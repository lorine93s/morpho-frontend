'use client';

import { cn } from '@/lib/utils';
import { VaultPosition } from '@/types';
import { Loading } from './Loading';
import Position from './Position';

export default function MyPositions({ 
  vaults,
  loading = true,
  setSelectedVault 
}: Readonly<{ 
  vaults: VaultPosition[], 
  loading: boolean,
  setSelectedVault: (vault: VaultPosition) => void
}>) {
  return (
    <div style={{minHeight: '60vh'}}
      className={cn(
        'w-full h-full rounded-xl grid justify-between items-center',
        'gap-8 relative',
        !vaults || loading || (vaults.filter(e => e.assetsUsd > 0).length > 1) ? 'grid-cols-2' : 'grid-cols-1'
      )}
    >
      { loading ?
        (
          <>
            <span className="absolute justify-self-center	"><Loading/></span>
            {[0, 1, 2, 3].map((item) => (
        <div key={item} className="h-[35vh] col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl"></div>
      ))}
          </>
        ) : vaults && vaults.length > 0  && vaults.some(e => e.assetsUsd > 0)? (
          <>
          {vaults.map((item) => {
            if (item.assetsUsd > 0) {
              return <Position key={item.vault.address} vaultPosition={item} setSelectedVault={setSelectedVault}/>
            }
          })}
          </>
        ) : (
          <>
                <span className="absolute text-center text-[#355180] text-5xl px-32 leading-loose">
        You do not currently have any open positions to manage.
      </span>
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="h-[35vh] col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl"></div>
      ))}
          </>
        )
      }

    </div>
  );
}
