"use client";

import Link from "next/link";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`p-4 flex justify-between items-center ${
        darkMode ? "bg-white text-gray-900" : "bg-slate-900 text-sky-200"
      }`}
    >
      <div className="text-2xl font-bold flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-1">
          <span
            className={`font-bold text-3xl transition-colors ${
              darkMode ? "text-gray-900" : "text-white"
            }`}
          >
            FazeBl
          </span>
          <span className="relative">
            <span
              className={`font-bold text-3xl transition-colors ${
                darkMode ? "text-black" : "text-white"
              }`}
            >
              og
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
