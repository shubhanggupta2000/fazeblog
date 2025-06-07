import Link from "next/link";
import { getPostBySlug } from "../../lib/medium";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-slate-900 py-12 px-2">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
        <Link
          href="/"
          className="text-sky-400 hover:text-sky-300 mb-8 inline-block transition-colors text-base font-medium"
        >
          &larr; Back to Home
        </Link>
        <article className="bg-slate-800 rounded-2xl shadow-xl p-6 md:p-10 border border-slate-700">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-sky-200 leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-400 mb-6 text-sm md:text-base">
            Published on {new Date(post.published).toLocaleDateString()}
          </p>
          <div
            className="prose prose-invert max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
