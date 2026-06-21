"use client";

import { useEffect, useState } from "react";
import { getMediumArticles } from "@/lib/medium";
import { projects } from "@/lib/projects";
import { apps } from "@/lib/apps";

type GitHubProfile = {
  followers: number;
  public_repos: number;
};

export function About() {
  const [github, setGithub] = useState<GitHubProfile | null>(null);
  const [articleCount, setArticleCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/cetreciii")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => setGithub(data))
      .catch(() => {});

    getMediumArticles("igor.tarantino")
      .then((articles) => setArticleCount(articles.length))
      .catch(() => {});
  }, []);

  return (
    <section id="about" className="bg-canvas-warm py-28">
      <div className="mx-auto max-w-[820px] px-6">
        <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
          About me
        </span>
        <h2 className="display-48 mt-4 text-ink">
          Commitment in creating and sharing.
        </h2>
        <div className="mt-8 space-y-5 text-[17px] leading-[1.65] text-ink-soft">
          <p>
            I like building things. It could be an iOS app, a visionOS app or also something with LEGOs.
            The thing is that I like focusing on something and watch it grow, especially when I am
            part of it. Focusing onto something and working on it to make it a real thing is a very satisfying feeling!
          </p>
          <p>
            And when you create something, inevitably you will also learn new things! For that reason, I really like
            documenting what I build and share it with the community. Add on top of this the fact that I enjoy writing
            and sharing my knowledge and here you got my core interests!
          </p>
          <p>
            This process helps me learn new things, improve my knowledge by exposing to concepts that I do not know yet
            and share it with the community.
          </p>
          <p>
            That&apos;s why &ldquo;Learn&rdquo;. That&apos;s why &ldquo;Improve&rdquo;. That&apos;s why &ldquo;Empower&rdquo;.
          </p>
        </div>

        {/* Social cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

          {/* GitHub */}
          <a
            href="https://github.com/cetreciii"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-sm transition hover:shadow-md hover:border-[rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-full bg-ink flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <span className="text-[11px] text-ink-mute transition group-hover:translate-x-0.5 duration-200">→</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">GitHub</p>
              <p className="mt-0.5 text-[12px] text-ink-mute">
                {github
                  ? `${github.followers} followers · ${github.public_repos} repos`
                  : "cetreciii"}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/igor-tarantino/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-sm transition hover:shadow-md hover:border-[rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-full bg-[#0a66c2] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-[11px] text-ink-mute transition group-hover:translate-x-0.5 duration-200">→</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">LinkedIn</p>
              <p className="mt-0.5 text-[12px] text-ink-mute">Igor Tarantino</p>
            </div>
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@igor.tarantino"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-sm transition hover:shadow-md hover:border-[rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-full bg-ink flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </div>
              <span className="text-[11px] text-ink-mute transition group-hover:translate-x-0.5 duration-200">→</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Medium</p>
              <p className="mt-0.5 text-[12px] text-ink-mute">
                {articleCount !== null ? `${articleCount} articles` : "Read my articles"}
              </p>
            </div>
          </a>

          {/* CV */}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/cv/CV_Igor_Tarantino.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-sm transition hover:shadow-md hover:border-[rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-full bg-accent-soft flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-text" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="text-[11px] text-ink-mute transition group-hover:translate-x-0.5 duration-200">→</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Curriculum Vitae</p>
              <p className="mt-0.5 text-[12px] text-ink-mute">Download PDF</p>
            </div>
          </a>

        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-[rgba(0,0,0,0.08)] pt-10 md:grid-cols-4">
          {[
            { k: projects.length.toString(), v: "Projects built" },
            { k: apps.length.toString(), v: "Apps on App Store" },
            { k: "3", v: "Platforms (iOS, visionOS, macOS)" },
            { k: "Swift", v: "Main language" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-[32px] font-bold tracking-[-0.03em] text-ink">
                {s.k}
              </dt>
              <dd className="mt-1 text-[14px] text-ink-soft">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
