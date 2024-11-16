'use client';

import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const Card = ({
  children
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return <div className="h-[35vh] col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl">{children}</div>;
};

export default function AvailablePositions() {
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
          {selectedAsset.highAPY1 && <Card />}
          {selectedAsset.highAPY2 && <Card />}
          {selectedAsset.highTVL && <Card />}
          {selectedAsset.trustedCurator && <Card />}
        </>
      ) : (
        <>
          <span className="absolute text-center text-[#355180] text-5xl px-32 leading-loose">
            Please Select at least one token to see positions
          </span>
          {[0, 1, 2, 3].map((item) => (
            <Card key={item} />
          ))}
        </>
      )}
    </div>
  );
}
