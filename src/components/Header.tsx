'use client';

import React from 'react';
import Wallet from './Wallet';

export default function Header() {
  return (
    <div className="w-full flex p-4 lg:px-[10vw] items-center justify-end">
      <Wallet />
    </div>
  );
}
