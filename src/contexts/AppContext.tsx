import type { Asset } from '@/types';
import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react';

type AppContext = {
  selectedAsset: Asset | undefined;
  setSelectedAsset: Dispatch<SetStateAction<Asset | undefined>>;
};

const AppContext = createContext<AppContext>({
  selectedAsset: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedAsset: (asset) => {}
});

export function useAppContext() {
  return useContext(AppContext);
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | undefined>(undefined);

  return <AppContext.Provider value={{ selectedAsset, setSelectedAsset }}> {children} </AppContext.Provider>;
};

export default AppProvider;
