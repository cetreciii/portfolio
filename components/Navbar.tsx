import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.06)] bg-white/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <span className="inline-block size-6 rounded-md bg-gradient-to-br from-[#E5271C] to-[#F04A40] shrink-0" />
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight text-ink leading-tight">Igor Tarantino</span>
            <span className="text-[10px] text-ink-mute leading-tight">iOS & visionOS Developer · Indie builder</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 sm:gap-6 text-[15px] font-medium text-[rgba(0,0,0,0.7)]">
          <a
            href="#about"
            className="hidden sm:inline hover:text-ink transition-colors"
          >
            About me
          </a>
          <a
            href="#work"
            className="hidden sm:inline hover:text-ink transition-colors"
          >
            Projects
          </a>
          <a
            href="#articles"
            className="hidden sm:inline hover:text-ink transition-colors"
          >
            Articles
          </a>
          <a
            href="#apps"
            className="hidden sm:inline hover:text-ink transition-colors"
          >
            Published apps
          </a>
          <a
            href="#opensource"
            className="hidden sm:inline hover:text-ink transition-colors"
          >
            Open source
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            ✉️ Send a message
          </Link>
        </div>
      </nav>
    </header>
  );
}
