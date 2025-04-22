"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`p-4 flex justify-between items-center ${
        darkMode ? "bg-white text-gray-900" : "bg-slate-900 text-sky-200"
      }`}
    >
      <div className="text-2xl mx-96 my-4 font-bold flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-md font-bold">Faze</span>
          <div className="bg-blue-600 text-white rounded-xl px-2 py-1 font-bold text-md">
            Blog
          </div>
        </Link>
      </div>
    </header>
  );
}
