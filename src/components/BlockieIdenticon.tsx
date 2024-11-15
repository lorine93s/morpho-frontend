'use client';

import { renderIcon } from '@download/blockies';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface IBlockieIdenticonProps {
  address: string;
  diameter: number;
  alt?: string;
}

const BlockieIdenticon = ({ address, diameter, alt = 'Blockie Identicon' }: IBlockieIdenticonProps) => {
  const [dataUrl, setDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    renderIcon({ seed: address.toLowerCase() }, canvas);
    const updatedDataUrl = canvas.toDataURL();

    if (updatedDataUrl !== dataUrl) {
      setDataUrl(updatedDataUrl);
    }
  }, [dataUrl, address]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {dataUrl && <Image src={dataUrl} height={diameter} width={diameter} className="rounded-full" alt={alt} />}
    </>
  );
};

export default BlockieIdenticon;
