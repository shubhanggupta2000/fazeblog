import BlogCard from "./BlogCard"

export default function BlogGrid({ posts }) {
  return (
    <div className="card-grid">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
