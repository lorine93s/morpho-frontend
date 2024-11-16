import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import type { Vault } from '@/types';

export default function VaultCard({
  children,
  vault
}: Readonly<{
  children?: React.ReactNode;
  vault?: Vault;
}>) {
  const { selectedVault } = useAppContext();
  return (
    <div
      className={cn(
        'h-[35vh] col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl',
        selectedVault && vault?.id === selectedVault?.id && 'border-2 border-white'
      )}
    >
      {children}
    </div>
  );
}
