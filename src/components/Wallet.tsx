import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { shortAddress } from '@/lib/utils';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IoCopyOutline, IoLogOutOutline } from 'react-icons/io5';
import { formatEther } from 'viem';
import { useAccount, useBalance, useDisconnect, useSwitchChain } from 'wagmi';
import BlockieIdenticon from './BlockieIdenticon';

export default function Wallet() {
  const { disconnect } = useDisconnect();
  const { chain, address } = useAccount();
  const { chains, switchChain } = useSwitchChain();
  const { data } = useBalance({ address });

  const { toast } = useToast();

  const handleSwitchNetwork = async () => {
    await switchChain({ chainId: chains[0].id });
  };

  return (
    <ConnectButton.Custom>
      {({ account, openConnectModal, mounted }) => {
        const isConnected = mounted && account;
        if (!isConnected) {
          return (
            <button onClick={openConnectModal} className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Connect Wallet
            </button>
          );
        }
        if (!chain) {
          return (
            <button onClick={handleSwitchNetwork} className="bg-red-500 text-white py-2 px-4 rounded-full">
              Switch Network
            </button>
          );
        }

        return (
          <Popover>
            <PopoverTrigger className="bg-blue-500 text-white py-2 px-4 rounded-full flex justify-between items-center gap-2">
              <BlockieIdenticon address={address as `0x${string}`} diameter={24} />
              {shortAddress(address as `0x${string}`)}
            </PopoverTrigger>

            <PopoverContent className="p-6 w-max" align="end">
              <div className="grid grid-cols-4 gap-2 p-2">
                <span className="col-span-3">{formatEther(data?.value ?? 0n)} ETH</span>
              </div>

              <div
                className="grid grid-cols-4 gap-2 p-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toast({
                    title: 'Copied!'
                  });
                  navigator.clipboard.writeText(address as string);
                }}
              >
                <div className="flex justify-center items-center col-span-1">
                  <IoCopyOutline />
                </div>
                <span className="col-span-3">Copy address</span>
              </div>

              <div className="grid grid-cols-4 gap-2 p-2 cursor-pointer" onClick={() => disconnect()}>
                <div className="flex justify-center items-center col-span-1">
                  <IoLogOutOutline />
                </div>
                <span className="col-span-3">Disconnect</span>
              </div>
            </PopoverContent>
          </Popover>
        );
      }}
    </ConnectButton.Custom>
  );
}
