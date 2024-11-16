'use client';

import ManagePositionsForm from '@/components/ManagePositionsForm';
import MyPositions from '@/components/MyPositions';
import { Separator } from '@/components/ui/separator';
import type { VaultPosition } from '@/types';
import { gql, useQuery } from '@apollo/client';
import { useAccount } from 'wagmi';
const GET_POSITIONS = gql`
query getUserPositions($address: String!) {
  userByAddress(address: $address) {
    vaultPositions {
      id
      shares
      assets
      assetsUsd
      vault {
        address
        id
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
  const { chain } = useAccount();

  const [positions, setPositions] = useState<VaultPosition[]>([]);

  useEffect(() => {
    const { data, loading } = useQuery(GET_POSITIONS, {
      variables: { chainId: [chain?.id as number] },
      skip: !chain?.id
    });

    setPositions(data?.userByAddress?.vaultPositions || []);
  }, [chain]);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 px-8">
        <ManagePositionsForm />
      </div>
      <div className="col-span-2 flex justify-between">
        <Separator orientation="vertical" className="w-0.5" />
        <div className="w-full px-8">
          <MyPositions />
        </div>
      </div>
    </div>
  );
}
