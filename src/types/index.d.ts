export interface Asset {
  address: `0x${string}`;
  logoURI: string;
  name: string;
  symbol: string;
  decimals: number;
  vaults: VaultItem[];
  trustedCurator?: VaultItem;
  highTVL?: VaultItem;
  highAPY1?: VaultItem;
  highAPY2?: VaultItem;
}

export interface VaultItem {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  creationBlockNumber: number;
  creationTimestamp: string;
  creatorAddress: string;
  whitelisted: boolean;
  network: string;
  state: {
    id: string;
    apy: number;
    netApy: number;
    totalAssets: number;
    totalAssetsUsd: number;
    fee: number;
    timelock: number;
  };
  asset?: {
    decimals: number;
    symbol: string;
    logoURI: string;
  };
  metadata?: {
    curators: {
      name: string;
      image: string;
      link: string;
    }[];
    image: string;
    description: string;
  };
  curators: {
    name: string;
    image: string;
    link: string;
  }[];
}

export interface VaultPosition {
  id: string;
  shares: number;
  assets: number;
  assetsUsd: number;
  vault: VaultItem;
}