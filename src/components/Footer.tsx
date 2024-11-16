'use client';

import hydrogenlogo from '@/assets/hydrogenlogo.png';
import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full flex center p-8 items-center justify-center gap-4">
<p>Built by Hydrogen Labs.</p>
                
                    <Link href='https://hydrogenlabs.xyz'>
                        <Image className="max-w-[24px]" style={{ animation: 'spin 8s linear infinite' }} src={hydrogenlogo} alt="Hydrogen Labs" />
                    </Link>
                    <Link href={'https://twitter.com/hydrogen_labs'}>
                        <FaTwitter />
                    </Link>
                    <Link href={'https://github.com/hydrogen-labs'}>
                        <FaGithub />
                    </Link>

    </div>
  );
}