import Parser from "rss-parser";

// Set a custom user-agent to avoid Medium blocking requests
const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  },
});

const mediumUsername = process.env.MEDIUM_USERNAME;

export async function getPosts() {
  const feedUrl = `https://medium.com/feed/@${mediumUsername}`;

  console.log("📦 Fetching Medium RSS feed from:", feedUrl);
  console.log("🔐 Using username:", mediumUsername);

  try {
    const feed = await parser.parseURL(feedUrl);

    console.log(
      "✅ Successfully fetched feed with",
      feed.items.length,
      "posts."
    );

    return feed.items.map((item) => ({
      id: item.guid,
      slug: item.link.split("/").pop(),
      title: item.title,
      content: item["content:encoded"] || item.content,
      description: item.contentSnippet,
      link: item.link,
      published: item.isoDate,
      coverImage: extractImageFromContent(item["content:encoded"]),
      category: item.categories?.[0] || "Blog",
    }));
  } catch (error) {
    console.error("❌ Failed to fetch Medium RSS feed:", error.message);
    return [];
  }
}

export async function getPostBySlug(slug) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    console.error(`❌ Post with slug "${slug}" not found`);
    throw new Error("Post not found");
  }
  return post;
}

function extractImageFromContent(content) {
  const match = content?.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "/placeholder.svg";
}
