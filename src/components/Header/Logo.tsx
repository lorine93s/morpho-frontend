'use client';

import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Morpho Frontend" width={48} height={48} />
    </Link>
  );
}
