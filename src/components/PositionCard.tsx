export default function VaultCard({
  children
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return <div className="min-h-[35vh] w-full max-w-[60vh] justify-self-center col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl">{children}</div>;
}
