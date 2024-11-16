'use client';

import ManagePositionsForm from '@/components/ManagePositionsForm';
import MyPositions from '@/components/MyPositions';
import { Separator } from '@/components/ui/separator';
import type { VaultPosition } from '@/types';
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const GET_POSITIONS = gql`
query getUserPositions($address: String!, $chainId: Int) {
  userByAddress(address: $address, chainId: $chainId) {
    vaultPositions {
      id
      shares
      assets
      assetsUsd
      vault {
        address
        id
        name
        asset {
          decimals
          symbol
          logoURI
        }
        dailyApys {
          apy
          netApy
        }
        liquidity {
          underlying
          usd
        }
        metadata {
          curators {
            image
            name
            url
            verified
          }
          description
          forumLink
          image
        }
        symbol
      }
    }
  }
}
`;

export default function Page() {
  const { chain, address } = useAccount();

  const { data, loading } = useQuery(GET_POSITIONS, {
    variables: { address, chainId: chain?.id as number },
    //skip: !chain?.id
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("my positions data", data);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [data]);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 px-8">
        <ManagePositionsForm vaults={data?.userByAddress?.vaultPositions}/>
      </div>
      <div className="col-span-2 flex justify-between">
        <Separator orientation="vertical" className="w-0.5" />
        <div className="w-full px-8">
          <MyPositions vaults={data?.userByAddress?.vaultPositions} loading={isLoading || loading}/>
        </div>
      </div>
    </div>
  );
}
