import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortAddress(address: `0x${string}`) {
  return address && [address.substring(0, 4), address.substring(address.length - 4)].join('...');
}
