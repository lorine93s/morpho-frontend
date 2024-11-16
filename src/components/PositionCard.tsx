import { cn } from '@/lib/utils';

export default function VaultCard({
  children,
  selected
}: Readonly<{
  children?: React.ReactNode;
  selected: boolean;
}>) {
  return <div className={cn(
    "min-h-[35vh] w-full max-w-[60vh] justify-self-center col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl",  
    selected && 'border-2 border-white')}>{children}</div>;
}
