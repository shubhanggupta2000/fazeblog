"use client";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center text-center px-4">
      <div>
        <h2 className="text-xl font-semibold text-sky-200 mb-2">
          Something went wrong
        </h2>
        <p className="text-slate-400 mb-4">
          This page couldn&apos;t load. Try again in a moment.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded transition-colors"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
