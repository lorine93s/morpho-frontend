'use client';

import ManagePositionsForm from '@/components/ManagePositionsForm';
import MyPositions from '@/components/MyPositions';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function Page() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 px-8">
        <ManagePositionsForm />
      </div>
      <div className="col-span-2 flex justify-between">
        <Separator orientation="vertical" className="w-0.5" />
        <div className="w-full px-8">
          <MyPositions />
        </div>
      </div>
    </div>
  );
}
