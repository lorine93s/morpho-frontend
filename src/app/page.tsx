import AvailablePositions from '@/components/AvailablePositions';
import EarnForm from '@/components/EarnForm';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 px-8">
        <EarnForm />
      </div>
      <div className="col-span-2 flex justify-between">
        <Separator orientation="vertical" className="w-0.5" />
        <div className="w-full px-8">
          <AvailablePositions />
        </div>
      </div>
    </div>
  );
}
