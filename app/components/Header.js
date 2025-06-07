"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`w-full py-4 ${
        darkMode ? "bg-white text-gray-900" : "bg-slate-900 text-sky-200"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0 flex items-center justify-start py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold">Faze</span>
          <div className="bg-blue-600 text-white rounded-xl px-2 py-1 font-bold text-lg md:text-xl">
            Blog
          </div>
        </Link>
      </div>
    </header>
  );
}
