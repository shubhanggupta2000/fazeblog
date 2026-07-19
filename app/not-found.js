import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center text-center px-4">
      <div>
        <h2 className="text-xl font-semibold text-sky-200 mb-2">
          Page not found
        </h2>
        <p className="text-slate-400 mb-4">This page does not exist.</p>
        <Link href="/" className="text-sky-400 hover:text-sky-300 underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}
