export interface Asset {
  address: `0x${string}`;
  logoURI: string;
  name: string;
  symbol: string;
  decimals: number;
  vaults: Vault[];
  trustedCuratorVault?: Vault;
  highTVLVault?: Vault;
  highAPY1Vault?: Vault;
  highAPY2Vault?: Vault;
}

export interface Collateral {
  market: {
    collateralAsset: Asset;
  };
  supplyAssets: number;
}

export interface Vault {
  id: string;
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
    allocation: Collateral[];
  };
  asset?: Asset;
  dailyApys?: {
    apy: number;
    netApy: number;
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
    url: string;
  }[];
}

export interface VaultPosition {
  id: string;
  shares: number;
  assets: number;
  assetsUsd: number;
  vault: Vault;
}
