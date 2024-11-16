'use client';

import { cn } from '@/lib/utils';
import { VaultPosition } from '@/types';
import { Loading } from './Loading';

export default function MyPositions({ 
  vaults,
  loading = true 
}: Readonly<{ 
  vaults: VaultPosition[], 
  loading: boolean 
}>) {
  return (
    <div
      className={cn(
        'w-full h-full border border-[#456DB5] bg-[#1B1D1F] rounded-xl grid grid-cols-2 justify-between items-center',
        'gap-8 relative'
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
        ) : vaults && vaults.length > 0 ? (
          <>
          
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
