"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const allIcons = [
  { src: "/projects/whoooshh/App_Icon_visionOS_Glass.png", alt: "Whoooshh" },
  { src: "/projects/roundeo/app-icon.png", alt: "Roundeo" },
  { src: "/projects/liquid/AppIcon_2_Light_Rounded.png", alt: "Liquid" },
  { src: "/projects/gennit/AppIcon.png", alt: "Gennit" },
  { src: "/projects/detective-dino/AppIconComposer.png", alt: "Detective Dino" },
  { src: "/projects/airchestra/app_Icon_Airchestra.png", alt: "AirChestra" },
  { src: "/projects/neglect-rehab/NegelectRehab_App_Icon.png", alt: "NeglectRehab" },
  { src: "/projects/duidu/Duidu_App_Icon.png", alt: "Duidu" },
  { src: "/projects/brainline/BrainLine_App_Icon.png", alt: "BrainLine" },
  { src: "/projects/nowhat/Nowhat_App_Icon_Light.png", alt: "Nowhat?" },
  { src: "/projects/postars/PoStars_App_Icon.png", alt: "PoStars" },
  { src: "/projects/route66/Route66_App_Icon.png", alt: "Route66" },
  { src: "/projects/keep-the-memory/KTM_App_Icon_1.png", alt: "Keep The Memory" },
  { src: "/projects/waddumean/Waddumean_App_Icon.png", alt: "WADDUMEAN?" },
  { src: "/projects/plantgogh/0493f6a7-aac8-450f-bdf9-708701f68ecd.png", alt: "PlantGogh" },
];

const ICON_SIZE = 160;
const FADE_S = 1.6;   // slide-in / fade-in duration
const HOLD_S = 2.2;   // time at full opacity in centre
const FADE_OUT_S = 1.6;
const TOTAL_S = FADE_S + HOLD_S + FADE_OUT_S;

// Keyframe time offsets (0–1)
const T1 = FADE_S / TOTAL_S;
const T2 = (FADE_S + HOLD_S) / TOTAL_S;

type IconItem = { id: number; iconIdx: number };
let _uid = 0;

function SingleIconStream({ containerWidth }: { containerWidth: number }) {
  const [items, setItems] = useState<IconItem[]>([]);
  const iconIdxRef = useRef(0);

  const spawn = useCallback(() => {
    const iconIdx = iconIdxRef.current % allIcons.length;
    iconIdxRef.current++;
    setItems((prev) => [...prev, { id: ++_uid, iconIdx }]);
  }, []);

  useEffect(() => {
    spawn();
    // Spawn the next icon the moment the current one starts its fade-out
    const iv = setInterval(spawn, (FADE_S + HOLD_S) * 1000);
    return () => clearInterval(iv);
  }, [spawn]);

  const remove = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const xIn = containerWidth + ICON_SIZE;
  const xCenter = containerWidth / 2 - ICON_SIZE / 2;
  const xOut = -ICON_SIZE * 2;

  return (
    <>
      {items.map(({ id, iconIdx }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{
            top: "50%",
            left: 0,
            width: ICON_SIZE,
            height: ICON_SIZE,
            marginTop: -ICON_SIZE / 2,
          }}
          animate={{
            x: [xIn, xCenter, xCenter, xOut],
            scale: [0.35, 1, 1, 0.35],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: TOTAL_S,
            ease: ["easeOut", "linear", "easeIn"],
            times: [0, T1, T2, 1],
          }}
          onAnimationComplete={() => remove(id)}
        >
          <Image
            src={allIcons[iconIdx].src}
            alt={allIcons[iconIdx].alt}
            width={ICON_SIZE}
            height={ICON_SIZE}
            className="h-full w-full rounded-[22%] object-cover shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
          />
        </motion.div>
      ))}
    </>
  );
}

function IconStream() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.offsetWidth);
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {containerWidth > 0 && <SingleIconStream containerWidth={containerWidth} />}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, #e8f0ff 0%, transparent 70%), radial-gradient(900px 400px at 90% 10%, #fdeaf5 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="flex items-center gap-12 lg:gap-20">

          {/* Left: text */}
          <div className="min-w-0 flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="display-64 mt-6 text-ink"
            >
              Learn.
              <br />
              Improve.
              <br />
              <em className="not-italic text-accent">Empower.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="lead mt-7 max-w-xl"
            >
              Hello! I&apos;m Igor, an indie developer! I like building things from scratch to shipped products, tell stories, create visual identities and learn while I do it! Then I give back to the community by sharing my learnings! Specialized in iOS and visionOS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.97]"
              >
                See the projects
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right: single icon stream — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="hidden h-[360px] w-[340px] shrink-0 md:block lg:h-[420px] lg:w-[400px]"
          >
            <IconStream />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
