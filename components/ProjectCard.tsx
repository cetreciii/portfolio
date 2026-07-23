"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-[16px] border border-[rgba(0,0,0,0.08)] bg-white shadow-card transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div
          className="relative aspect-[16/10] w-full overflow-hidden"
          style={{ background: project.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {project.icon ? (
              <div className="transition-transform duration-700 ease-out group-hover:scale-110">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  width={100}
                  height={100}
                  className={
                    project.stack.includes("visionOS")
                      ? "rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                      : "rounded-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                  }
                />
              </div>
            ) : (
              <span className="text-[88px] transition-transform duration-700 ease-out group-hover:scale-110">
                {project.emoji}
              </span>
            )}
          </div>
          <div className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text backdrop-blur-sm">
            {project.year}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(0,0,0,0.08)]" />
        </div>

        <div className="p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className={`${project.title.length > 12 ? "text-[17px]" : "text-[22px]"} font-bold leading-[1.27] tracking-[-0.25px] text-ink`}>
              {project.title}
            </h3>
            <span className="shrink-0 text-[13px] font-medium text-ink-mute">
              {project.role}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-[15px] leading-[1.5] text-ink-soft">
            {project.tagline}
          </p>
          <div className="mt-4 flex items-center gap-1 text-[14px] font-semibold text-accent">
            Explore the project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
