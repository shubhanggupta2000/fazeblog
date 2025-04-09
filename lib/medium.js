import Parser from "rss-parser";

const parser = new Parser();
const mediumUsername = process.env.MEDIUM_USERNAME; // Ensure this is set in your .env file

export async function getPosts() {
  const feedUrl = `https://medium.com/feed/@${mediumUsername}`;
  try {
    const feed = await parser.parseURL(feedUrl);
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
    console.error("Failed to fetch Medium RSS feed:", error);
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