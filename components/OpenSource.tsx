"use client";

import { useEffect, useState } from "react";

const GITHUB_USERNAME = "cetreciii";

const EXCLUDED_REPOS = ["DICOMViewer", "aHire", "cetreciii.github.io", "DICOMViewerVisionOS2", "Liquid", "Detective_Dino", "Gennit", "portfolio", "Route66"];

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
};

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=public`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data as Repo[]).filter(
      (r) => !r.name.startsWith(".") && !EXCLUDED_REPOS.includes(r.name)
    );
  } catch {
    return [];
  }
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Swift: "#f05138",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Kotlin: "#A97BFF",
  CSS: "#563d7c",
  HTML: "#e34c26",
};

function SkeletonCard() {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-sm animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-gray-200 shrink-0" />
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-2/3 rounded bg-gray-200" />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-3 w-16 rounded bg-gray-200" />
        <div className="h-3 w-8 rounded bg-gray-200" />
        <div className="h-3 w-8 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export function OpenSource() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="opensource" className="bg-canvas-warm py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
              Open source
            </span>
            <h2 className="display-48 mt-4 text-ink">Things I&apos;ve <span className="text-accent">shared</span></h2>
            <p className="lead mt-4">
              Open source projects! Feel free to contribute as you like! There are also some sample codes
              that you can clone and use for your own projects!
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 text-[13px] font-medium text-ink-mute transition hover:text-ink md:block"
          >
            View all on GitHub →
          </a>
        </div>

        {!loading && repos.length === 0 ? (
          <p className="text-[15px] text-ink-soft">No public repositories found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between gap-4 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-sm transition hover:border-[rgba(0,0,0,0.15)] hover:shadow-md"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="shrink-0 text-ink-mute"
                          aria-hidden
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span className="text-[15px] font-bold text-ink group-hover:text-accent transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      {repo.description && (
                        <p className="text-[13px] leading-relaxed text-ink-soft line-clamp-2">
                          {repo.description}
                        </p>
                      )}
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-text"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-[12px] text-ink-mute">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="inline-block h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: languageColors[repo.language] ?? "#8b8b8b",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M6 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 18a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm3-8.25v.09A5 5 0 0 1 14.75 15H18a.75.75 0 0 1 0 1.5h-3.25A5 5 0 0 1 9 11.84v-.09a.75.75 0 0 1 1.5 0zM6 9.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 6 9.75z" />
                        </svg>
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}
