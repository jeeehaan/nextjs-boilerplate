'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className=" text-4xl font-bold">Next.js Starter Template</h1>
      <p>by @jeeehaan</p>
      <div className="flex space-x-4">
        <Image src="/next.svg" alt="" width={60} height={40} />
        <Image src="/typescript.svg" alt="" width={60} height={40} />
        <Image src="/tailwindcss.svg" alt="" width={60} height={40} />
        <Image src="/shadcn.svg" alt="" width={60} height={40} />
        <Image src="/prisma.svg" alt="" width={60} height={40} />
        <Image src="/nextauth.svg" alt="" width={60} height={40} />
        <Image src="/eslint.svg" alt="" width={60} height={40} />
        <Image src="/prettier.svg" alt="" width={60} height={40} />
        <Image src="/husky.svg" alt="" width={60} height={40} />
      </div>
      <Button onClick={() => signIn()}>Login</Button>
    </div>
  );
}
