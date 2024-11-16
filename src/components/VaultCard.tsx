export default function VaultCard({
  children
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return <div className="h-[35vh] col-span-1 bg-[#1f2324] border border-[#456DB5] rounded-xl">{children}</div>;
}
