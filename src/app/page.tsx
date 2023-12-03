'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className=" text-4xl font-bold">Next.js Starter Template</h1>
      <p>by @jeeehaan</p>
      <Button onClick={() => signIn()}>Login</Button>
    </div>
  );
}
