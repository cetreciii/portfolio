"use client";

import { useEffect, useState } from "react";
import { getMediumArticles, MediumArticle } from "@/lib/medium";

function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-xl border border-[rgba(0,0,0,0.08)] bg-white overflow-hidden shadow-sm animate-pulse">
      <div className="w-full h-40 bg-gray-200" />
      <div className="flex flex-col gap-2 p-4">
        <div className="h-3 w-24 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>
    </div>
  );
}

function formatCategory(cat: string): string {
  return cat
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\b2d\b/gi, "2D")
    .replace(/\b3d\b/gi, "3D");
}

export function Articles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMediumArticles("igor.tarantino")
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (!loading && articles.length === 0) return null;

  return (
    <section id="articles" className="bg-canvas-warm py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
              Articles
            </span>
            <h2 className="display-48 mt-4 text-ink">Things I've <span className="text-accent">written</span></h2>
            <p className="lead mt-4">
              Every project teaches me something and I like to write about it so others don't have to figure it out alone! It's my contribution to the community since I believe in sharing to empower!
            </p>
          </div>
          <div className="hidden text-[13px] font-medium text-ink-mute md:block">
            {loading ? "—" : `${articles.length} articles`}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map(({ title, link, thumbnail, pubDate, categories }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[rgba(0,0,0,0.08)] bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:border-[rgba(0,0,0,0.15)]"
                >
                  {thumbnail && (
                    <div className="h-40 w-full overflow-hidden shrink-0">
                      <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-text">
                      Medium · {pubDate}
                    </span>
                    <span className="text-[14px] font-medium leading-snug text-ink group-hover:underline">
                      {title}
                    </span>
                    {categories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {categories.map((cat) => (
                          <span
                            key={cat}
                            className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-text"
                          >
                            {formatCategory(cat)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
}
