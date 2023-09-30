import React from "react";

export default function Navbar({}) {
  return (
    <nav className="flex items-center justify-between p-2">
      <h1 className="font-semibold">Eric Hong</h1>

      <ul className="mx-auto hidden h-full w-screen items-center justify-center text-xs font-light md:relative md:flex">
        <li className="px-4 py-2">About</li>
        <li className="px-4 py-2">Services</li>
        <li className="px-4 py-2">Portfolio</li>
        <li className="px-4 py-2">Testimonia</li>
      </ul>
      <section className="flex gap-4">
        <div className="rounded-lg px-6 py-2 font-light ring-1 ring-black/50">
          Search↗
        </div>
        <button className="block md:hidden">☰</button>
      </section>
    </nav>
  );
}
