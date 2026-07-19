import Parser from "rss-parser";
import DOMPurify from "isomorphic-dompurify";

let cachedFeed = null;
let lastFetched = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Set a custom user-agent to avoid Medium blocking requests
const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  },
});

// Remove "@" if present in username from .env
const mediumUsername = process.env.MEDIUM_USERNAME?.replace(/^@/, "");

export async function getPosts() {
  const feedUrl = `https://medium.com/feed/@${mediumUsername}`;

  // Use cache if available and not expired
  if (cachedFeed && Date.now() - lastFetched < CACHE_DURATION) {
    return cachedFeed;
  }

  console.log("Fetching Medium RSS feed from:", feedUrl);

  try {
    const feed = await parser.parseURL(feedUrl);

    const posts = feed.items.map((item) => {
      const rawContent = item["content:encoded"] || item.content;
      return {
        id: item.guid,
        slug: item.link.split("/").pop(),
        title: item.title,
        content: DOMPurify.sanitize(rawContent),
        description: item.contentSnippet,
        link: item.link,
        published: item.isoDate,
        coverImage: extractImageFromContent(rawContent),
        category: item.categories?.[0] || "Blog",
      };
    });

    // Cache the result
    cachedFeed = posts;
    lastFetched = Date.now();

    return posts;
  } catch (error) {
    console.error("Failed to fetch Medium RSS feed:", error.message);
    // Optionally return cachedFeed if available, even if stale
    if (cachedFeed) return cachedFeed;
    return [];
  }
}

export async function getPostBySlug(slug) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    console.error(`Post with slug "${slug}" not found`);
    throw new Error("Post not found");
  }
  return post;
}

function extractImageFromContent(content) {
  const match = content?.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "/placeholder.svg";
}
