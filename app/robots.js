export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://fazeblog.vercel.app/sitemap.xml",
  };
}
