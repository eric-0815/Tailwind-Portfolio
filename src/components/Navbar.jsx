import React from "react";

export default function Navbar({}) {
  return (
    <nav className="flex items-center justify-between p-2">
      <div>Logo</div>
      <ul className="flex text-xs font-light">
        <li className="px-4 py-2">About</li>
        <li className="px-4 py-2">Services</li>
        <li className="px-4 py-2">Portfolio</li>
        <li className="px-4 py-2">Testimonia</li>
      </ul>
      <div className="rounded-lg px-6 py-2 font-light ring-1 ring-black/50">
        Search🔍
      </div>
    </nav>
  );
}
