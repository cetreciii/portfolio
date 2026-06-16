export type MediumArticle = {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
};

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

export async function getMediumArticles(username: string): Promise<MediumArticle[]> {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);

  if (!res.ok) return [];

  const data = await res.json();

  return (data.items as any[]).map((item) => ({
    title: item.title,
    link: item.link,
    thumbnail: item.thumbnail || extractFirstImage(item.content ?? item.description ?? "") || null,
    pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  }));
}
