'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function HeaderLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/earn', label: 'Earn' },
    { href: '/positions', label: 'Your Positions' },
    { href: '/faq', label: 'FAQ' },
    /*{ href: '/rewards', label: 'Your Rewards' }*/
    // we should show rewards on my positions and we don't need as detailed of a breakdown as Morpho has
    // ideally users auto claim rewards when they withdraw or supply, as in liquity
  ];

  return (
    <div className="w-full flex justify-between p-4 items-center whitespace-nowrap">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="flex flex-col items-center px-8">
          {label}
          {pathname === href && <Separator orientation="horizontal" className="h-1 w-4/5" />}
        </Link>
      ))}
    </div>
  );
}
