import Link from "next/link";
import { getPostBySlug } from "../../lib/medium";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/"
        className="text-sky-400 hover:text-sky-300 mb-6 inline-block transition-colors"
      >
        &larr; Back to Home
      </Link>
      <article className="bg-slate-800 rounded-lg shadow-md p-8 border border-slate-700">
        <h1 className="text-3xl font-bold mb-4 text-sky-200">{post.title}</h1>
        <p className="text-slate-400 mb-6">
          Published on {new Date(post.published).toLocaleDateString()}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose prose-invert max-w-none"
        />
      </article>
    </div>
  );
}
