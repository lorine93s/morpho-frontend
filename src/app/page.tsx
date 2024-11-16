import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-[10vh]">
      <h1 className="text-4xl font-bold">The Easiest Way to Earn Sustainable Yield.</h1>
      <p className="text-lg text-[#456DB5] mt-[2vh]">Morpho is a permissionless lending protocol that allows you to earn sustainable yield on your crypto.</p>
      <Link href="/earn">
        <button
          className='mt-[2vh] text-xl w-full rounded-[16px] py-2 px-6 bg-[#456DB5]'
        >
            Start Earning
          </button>
      </Link>
    </div>
  );
}
