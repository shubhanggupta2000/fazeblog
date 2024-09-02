import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Faze<span className="text-teal-400">Blog</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}