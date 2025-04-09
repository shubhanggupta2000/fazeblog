import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card">
      <div
        className="card__background"
        style={{
          backgroundImage: `url(${
            post.coverImage || "/placeholder.svg?height=225&width=150"
          })`,
        }}
      ></div>
      <div className="card__content">
        <p className="card__category">{post.category || "Blog"}</p>
        <h3 className="card__heading">{post.title}</h3>
      </div>
    </Link>
  );
}
