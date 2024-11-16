'use client';

import type { Collateral } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export default function VaultImage({
  collateral,
  totalCollateral
}: {
  collateral: Collateral;
  totalCollateral: Collateral[];
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <Image
      key={collateral.market.collateralAsset!.logoURI + collateral.supplyAssets}
      src={collateral.market.collateralAsset!.logoURI}
      alt={collateral.market.collateralAsset!.name}
      className={totalCollateral.length > 9 ? '-mr-1' : totalCollateral.length > 1 ? '-mr-3' : ''}
      width={totalCollateral.length > 9 ? 20 : 28}
      height={totalCollateral.length > 9 ? 20 : 28}
      onError={() => {
        setHasError(true);
      }}
    />
  );
}
