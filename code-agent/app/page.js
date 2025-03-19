'use client';

import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Willkommen bei CodeAgent</h1>
      <p className="mt-4 text-lg">Dein interaktiver Weg zur Programmierung mit KI</p>
      <button
        onClick={() => signIn('google')}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Mit Google anmelden
      </button>
    </div>
  );
}