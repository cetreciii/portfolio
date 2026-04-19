import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ZoomableImage } from "@/components/ZoomableImage";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Igor`,
    description: project.tagline,
  };
}

function inlineBold(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**")
          ? <strong key={i}>{p.slice(2, -2)}</strong>
          : p
      )}
    </>
  );
}

function renderMd(text: string, cls = "text-[17px] leading-[1.7] text-[rgba(0,0,0,0.82)]"): ReactNode[] {
  return text.split("\n\n").filter(Boolean).map((block, bi) => {
    const lines = block.split("\n").filter(Boolean);

    if (lines.every(l => /^\s*-\s/.test(l))) {
      return (
        <ul key={bi} className={`mt-3 list-disc pl-5 space-y-1 ${cls}`}>
          {lines.map((l, i) => <li key={i}>{inlineBold(l.replace(/^\s*-\s/, ""))}</li>)}
        </ul>
      );
    }

    if (!lines.some(l => /^\s*-\s/.test(l))) {
      return <p key={bi} className={`mt-4 ${cls}`}>{inlineBold(lines.join(" "))}</p>;
    }

    // mixed block: alternate text lines and list items
    const chunks: { type: "text" | "list"; content: string }[] = lines.map(l =>
      /^\s*-\s/.test(l) ? { type: "list", content: l.replace(/^\s*-\s/, "") } : { type: "text", content: l }
    );
    const out: ReactNode[] = [];
    let i = 0;
    while (i < chunks.length) {
      if (chunks[i].type === "text") {
        const texts: string[] = [];
        while (i < chunks.length && chunks[i].type === "text") texts.push(chunks[i++].content);
        out.push(<p key={`t${i}`} className={`mt-4 ${cls}`}>{inlineBold(texts.join(" "))}</p>);
      } else {
        const items: string[] = [];
        while (i < chunks.length && chunks[i].type === "list") items.push(chunks[i++].content);
        out.push(
          <ul key={`l${i}`} className={`mt-3 list-disc pl-5 space-y-1 ${cls}`}>
            {items.map((it, j) => <li key={j}>{inlineBold(it)}</li>)}
          </ul>
        );
      }
    }
    return <div key={bi}>{out}</div>;
  });
}

function SectionBlock({ s, imgAlt }: { s: { heading?: string; quickRead?: string; body: string; images?: string[] }; imgAlt: string }) {
  return (
    <div>
      {s.heading && (
        <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
          {s.heading}
        </h3>
      )}
      {s.quickRead && (
        <div className="my-6 rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-canvas-warm px-6 py-5 shadow-card">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-mute">TLDR</p>
          {renderMd(s.quickRead, "text-[15px] leading-[1.7] text-[rgba(0,0,0,0.75)]")}
        </div>
      )}
      <div className={s.heading && !s.quickRead ? "mt-3" : ""}>
        {renderMd(s.body)}
      </div>
      {s.images && s.images.length > 0 && (
        <div className={`mt-8 grid gap-4 ${s.images.length === 1 ? "" :
            s.images.length % 3 === 0 ? "grid-cols-2 sm:grid-cols-3" :
              "sm:grid-cols-2"
          }`}>
          {s.images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-canvas-warm shadow-card"
            >
              <ZoomableImage
                src={src}
                alt={`${imgAlt} image ${i + 1}`}
                width={700}
                height={450}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(idx + 1) % projects.length];

  const learnSections = project.sections.filter(s => s.category === "learn");
  const attitudeSections = project.sections.filter(s => s.category === "attitude");

  return (
    <article>
      {/* Title block */}
      <header className="mx-auto max-w-[820px] px-6 pt-20 pb-12 md:pt-28">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span> All work
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.125px] text-ink-soft">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-accent-text">
            {project.year}
          </span>
          <span className="text-ink-mute">·</span>
          <span>{project.role}</span>
        </div>

        <h1 className="display-64 mt-5 text-ink">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-ink-soft">
          {project.tagline}
        </p>
      </header>

      {/* Hero visual */}
      <div className="mx-auto max-w-[1100px] px-6">
        {project.coverImage ? (
          <div className="overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.08)] shadow-card">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              width={1100}
              height={619}
              className="w-full object-cover"
              priority
            />
          </div>
        ) : (
          <div
            className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.08)] shadow-card"
            style={{ background: project.gradient }}
          >
            {project.icon ? (
              <Image
                src={project.icon}
                alt={`${project.title} icon`}
                width={160}
                height={160}
                className="rounded-[36px] shadow-[0_16px_48px_rgba(0,0,0,0.22)]"
              />
            ) : (
              <span className="text-[clamp(120px,18vw,220px)]">
                {project.emoji}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Meta bar */}
      <div className="mx-auto mt-16 max-w-[720px] px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[rgba(0,0,0,0.08)] py-8 md:grid-cols-4">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.125px] text-ink-mute">
              Year
            </dt>
            <dd className="mt-1 text-[15px] font-medium text-ink">
              {project.year}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.125px] text-ink-mute">
              Role
            </dt>
            <dd className="mt-1 text-[15px] font-medium text-ink">
              {project.role}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.125px] text-ink-mute">
              Stack
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[rgba(0,0,0,0.08)] bg-white px-2.5 py-0.5 text-[12px] font-medium text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[720px] px-6 py-12">

        {/* Keywords */}
        <div className="mb-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">Concepts I've been exposed to</p>
          <div className="grid grid-cols-3 gap-4">
            {project.keywords.map((kw, i) => (
              <div key={kw} className="border-t-2 border-accent pt-3">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[20px] font-bold leading-snug tracking-[-0.01em] text-ink">
                  {kw}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What is */}
        <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
          What is {project.title}?
        </h2>
        <div className="mt-4">
          {renderMd(project.description, "text-[18px] leading-[1.65] text-[rgba(0,0,0,0.82)]")}
        </div>

        {project.descriptionImages && project.descriptionImages.length > 0 && (
          <div className={`mt-10 grid gap-4 ${
            project.descriptionImages.length === 1 ? "max-w-sm mx-auto" : 
            project.descriptionImages.length % 3 === 0 ? "grid-cols-2 sm:grid-cols-3" : 
            "sm:grid-cols-2"
          }`}>
            {project.descriptionImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-canvas-warm shadow-card"
              >
                <ZoomableImage
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={700}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {(project.moreInfoLink || project.link || project.secondaryLink) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.moreInfoLink && (
              <a
                href={project.moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-all hover:border-[rgba(0,0,0,0.2)] hover:bg-canvas-warm active:scale-[0.97]"
              >
                More info
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.97]"
              >
                {project.link.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
            {project.secondaryLink && (
              <a
                href={project.secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-all hover:border-[rgba(0,0,0,0.2)] hover:bg-canvas-warm active:scale-[0.97]"
              >
                {project.secondaryLink.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
          </div>
        )}

        {/* What did I learn */}
        {learnSections.length > 0 && (
          <div className="mt-16">
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
              What did I learn from this experience?
            </h2>
            <div className="mt-8 space-y-10">
              {learnSections.map((s, i) => (
                <SectionBlock key={i} s={s} imgAlt={s.heading ?? project.title} />
              ))}
            </div>
          </div>
        )}

        {/* Attitude in the project */}
        {attitudeSections.length > 0 && (
          <div className="mt-16">
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
              Attitude in the project
            </h2>
            <div className="mt-8 space-y-10">
              {attitudeSections.map((s, i) => (
                <SectionBlock key={i} s={s} imgAlt={s.heading ?? project.title} />
              ))}
            </div>
          </div>
        )}

        {project.sections.length > 0 && (project.moreInfoLink || project.link || project.secondaryLink) && (
          <div className="mt-16 flex flex-wrap gap-3">
            {project.moreInfoLink && (
              <a
                href={project.moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-all hover:border-[rgba(0,0,0,0.2)] hover:bg-canvas-warm active:scale-[0.97]"
              >
                More info
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.97]"
              >
                {project.link.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
            {project.secondaryLink && (
              <a
                href={project.secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-[rgba(0,0,0,0.12)] bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-all hover:border-[rgba(0,0,0,0.2)] hover:bg-canvas-warm active:scale-[0.97]"
              >
                {project.secondaryLink.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Next project */}
      <section className="mt-8 border-t border-[rgba(0,0,0,0.08)] bg-canvas-warm py-24">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.125px] text-ink-mute">
            Next project
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mt-4 inline-flex flex-col items-center"
          >
            <span className="display-48 text-ink transition-colors group-hover:text-accent">
              {nextProject.title} →
            </span>
            <span className="mt-2 text-[16px] text-ink-soft">
              {nextProject.tagline}
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
