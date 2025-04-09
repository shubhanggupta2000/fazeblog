import ProfileSection from "./components/ProfileSection";
import BlogGrid from "./components/BlogGrid";
import { getPosts } from "../lib/medium";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen py-12 px-4 bg-slate-900">
      <div className="container mx-auto">
        <ProfileSection />
        <BlogGrid posts={posts} />
      </div>
    </main>
  );
}
