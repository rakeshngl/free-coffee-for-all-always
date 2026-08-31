import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ---------------- reduced motion ---------------- */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ---------------- scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("on");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- scramble-decode text ---------------- */
const GLYPHS = "█▓▒░#%&@$*+=?/";
export function useScramble(text: string, startDelay = 0) {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(reduced ? text : "");
  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame += 1;
        const settled = Math.floor(frame / 2.2);
        if (settled >= text.length) {
          setOut(text);
          if (interval) clearInterval(interval);
          return;
        }
        setOut(
          text
            .split("")
            .map((c, i) => {
              if (i < settled || c === " ") return c;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join(""),
        );
      }, 34);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, reduced, startDelay]);
  return out;
}

/* ---------------- ticking counter ---------------- */
export function useLiveCounter(initial: number, every = 2600, step = [1, 4] as const) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + step[0] + Math.floor(Math.random() * (step[1] - step[0] + 1)));
    }, every);
    return () => clearInterval(id);
  }, [every, step]);
  return value;
}

/* ---------------- open-now status ---------------- */
export function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const h = now.getHours();
  const open = h >= 8 && h < 20;
  return { open, clock: now };
}

/* ---------------- marquee ---------------- */
export function Marquee({
  children,
  reverse = false,
  speed = 30,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ "--speed": `${speed}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------- rotating letterboard ---------------- */
export function LetterBoard({ phrases }: { phrases: string[] }) {
  const reduced = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 3400);
    return () => clearInterval(id);
  }, [phrases.length, reduced]);
  const text = phrases[idx];
  const cells = useMemo(
    () =>
      text.split("").map((c, i) => (
        <span
          key={`${idx}-${i}-${c}`}
          className={`letterflip inline-block text-center ${c === " " ? "opacity-30" : ""}`}
          style={{ width: "0.68em", animationDelay: `${i * 28}ms` }}
        >
          {c === " " ? "·" : c}
        </span>
      )),
    [text, idx],
  );
  return (
    <div className="font-mono text-[13px] sm:text-sm tracking-wide bg-ink text-butter px-3 py-2 rounded-[4px] border border-latte/15 shadow-[inset_0_2px_10px_rgba(0,0,0,.6)] whitespace-nowrap overflow-hidden">
      <span className="text-cherry mr-2">●</span>
      <span className="text-latte/60 mr-3">NOW POURING</span>
      <span className="inline-flex">{cells}</span>
    </div>
  );
}

/* ---------------- circular stamp ---------------- */
export function CircleStamp({ className = "" }: { className?: string }) {
  return (
    <div className={`spin-slow ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <path id="stamp-circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
        <text fontSize="12.5" fontWeight="700" fill="currentColor" fontFamily="Space Mono, monospace" letterSpacing="2.5">
          <textPath href="#stamp-circ">NO CATCH · UNLIMITED · ZERO DOLLARS ·</textPath>
        </text>
        <path d="M50 52h20v7a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8v-7Z" fill="currentColor" />
        <path d="M70 54h3a4 4 0 0 1 0 8h-3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M55 44c-1.4 2 1.4 2.8 0 5M63 44c-1.4 2 1.4 2.8 0 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

/* ---------------- custom line icons ---------------- */
export function IconCup({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M6 12h16v6.5A7.5 7.5 0 0 1 14.5 26h-1A7.5 7.5 0 0 1 6 18.5V12Z" />
      <path d="M22 13.5h2.5a3.5 3.5 0 0 1 0 7H22" />
      <path d="M11 4.5c-1.2 1.7 1.2 2.4 0 4.2M17 4.5c-1.2 1.7 1.2 2.4 0 4.2" />
    </svg>
  );
}

export function IconPin({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="10" r="5.5" />
      <path d="M16 15.5 16 27" />
      <path d="M12.5 15 9 18h14l-3.5-3" />
    </svg>
  );
}

export function IconMegaphone({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13v6h4l12 6V7L9 13H5Z" />
      <path d="M25 12.5a4 4 0 0 1 0 7" />
      <path d="M9 19.5V25a2 2 0 0 0 4 .4" />
    </svg>
  );
}

export function IconBean({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <ellipse cx="16" cy="16" rx="9.5" ry="12" transform="rotate(28 16 16)" />
      <path d="M11 7.5c4 3.5 1.5 7 4.5 10s5 2.5 5.5 7" />
    </svg>
  );
}

export function IconTicket({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a3 3 0 0 0 0 10v2h24v-2a3 3 0 0 1 0-10V9H4v2Z" />
      <path d="M13 9v2m0 4v2m0 4v2" strokeDasharray="0.1 5.5" />
    </svg>
  );
}

export function IconStar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.5l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.6l-5.7 3.5 1.5-6.5-5-4.4 6.6-.6L12 2.5Z" />
    </svg>
  );
}

export function IconArrow({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function IconSteamCup({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <g className="steam" stroke="currentColor">
        <path d="M18 8c-1.8 2.6 1.8 3.6 0 6.4" />
        <path d="M25 6c-1.8 2.6 1.8 3.6 0 6.4" />
        <path d="M32 8c-1.8 2.6 1.8 3.6 0 6.4" />
      </g>
      <path d="M10 22h24v9a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10v-9Z" />
      <path d="M34 24h3.5a5 5 0 0 1 0 10H34" />
    </svg>
  );
}

export function PinDot({ color }: { color: string }) {
  return (
    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
      <svg width="22" height="26" viewBox="0 0 22 26">
        <ellipse cx="11" cy="24" rx="5" ry="1.6" fill="rgba(20,10,4,0.35)" />
        <path d="M11 12 L11 23" stroke="#8c8c8c" strokeWidth="2" />
        <circle cx="11" cy="8" r="6.5" fill={color} />
        <circle cx="8.8" cy="5.8" r="2" fill="rgba(255,255,255,0.5)" />
      </svg>
    </span>
  );
}
