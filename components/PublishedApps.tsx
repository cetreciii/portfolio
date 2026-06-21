import Image from "next/image";
import { apps } from "@/lib/apps";

function extractAppId(url: string): string | null {
  const match = url.match(/id(\d+)/);
  return match ? match[1] : null;
}

async function fetchIcon(appId: string): Promise<string | null> {
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}`, {
      next: { revalidate: 86400 },
    });
    const data = await res.json();
    return (data.results?.[0]?.artworkUrl512 as string) ?? null;
  } catch {
    return null;
  }
}

export async function PublishedApps() {
  const appsWithIcons = await Promise.all(
    apps.map(async (app) => {
      const appId = extractAppId(app.appStoreUrl);
      const icon = appId ? await fetchIcon(appId) : null;
      return { ...app, icon };
    })
  );

  return (
    <section id="apps" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
              Published apps
            </span>
            <h2 className="display-48 mt-4 text-ink">Things I&apos;ve <span className="text-accent">published</span></h2>
            <p className="lead mt-4">
              Those projects made it to the App Store! Please, let me know what you think about
              those, feedback is the best thing could happen to a solo developer like me!
            </p>
          </div>
          <div className="hidden text-[13px] font-medium text-ink-mute md:block">
            {apps.length} apps
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {appsWithIcons.map((app, i) => (
            <a
              key={i}
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-6 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-sm transition hover:border-[rgba(0,0,0,0.15)] hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                {app.icon ? (
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={56}
                    height={56}
                    className="rounded-[12px] shadow-sm"
                  />
                ) : (
                  <div className="h-14 w-14 shrink-0 rounded-[12px] bg-canvas-warm" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[12px] font-semibold tracking-wide text-accent-text">
                    {app.platform}
                  </span>
                  <span className="text-[16px] font-bold leading-snug text-ink">
                    {app.name}
                  </span>
                  <span className="text-[13px] leading-snug text-ink-soft">
                    {app.subtitle}
                  </span>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-[12px] font-semibold text-white transition group-hover:bg-accent">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
