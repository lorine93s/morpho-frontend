import type { Asset, Vault } from '@/types';
import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react';

type AppContext = {
  selectedAsset: Asset | undefined;
  setSelectedAsset: Dispatch<SetStateAction<Asset | undefined>>;
  selectedVault: Vault | null;
  setSelectedVault: Dispatch<SetStateAction<Vault | null>>;
};

const AppContext = createContext<AppContext>({
  selectedAsset: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedAsset: (asset) => {},
  selectedVault: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedVault: (vault) => {}
});

export function useAppContext() {
  return useContext(AppContext);
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | undefined>(undefined);
  const [selectedVault, setSelectedVault] = useState<Vault | null>(null);

  return (
    <AppContext.Provider value={{ selectedAsset, setSelectedAsset, selectedVault, setSelectedVault }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
