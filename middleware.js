const requests = new Map();

export function middleware(request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const windowMs = 60_000;
  const limit = 30;

  const entry = requests.get(ip) || { count: 0, start: now };
  if (now - entry.start > windowMs) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count++;
  requests.set(ip, entry);

  if (entry.count > limit) {
    return new Response("Too many requests", { status: 429 });
  }
}

export const config = { matcher: "/blog/:path*" };
