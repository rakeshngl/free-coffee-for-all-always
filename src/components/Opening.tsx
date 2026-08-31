import { marqueePromos, nowPouring } from "../data";
import { IMG } from "../images";
import {
  CircleStamp,
  LetterBoard,
  Marquee,
  Reveal,
  useOpenStatus,
  useScramble,
  IconArrow,
} from "../lib";

export function Opening({ cups }: { cups: number }) {
  const line1 = useScramble("THE COFFEE", 250);
  const line2 = useScramble("IS FREE.", 900);
  const { open } = useOpenStatus();

  return (
    <section id="top" className="relative bg-roast text-latte pt-16 overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[540px] h-[540px] rounded-full bg-cocoa/50 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full bg-marigold/8 blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-14 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* left: poster type */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-latte/60">
              <span className="inline-flex items-center gap-2 border border-latte/20 rounded-full px-3 py-1.5">
                <span className={`relative w-2 h-2 rounded-full ${open ? "bg-sage text-sage" : "bg-cherry text-cherry"} pulse-dot`} />
                {open ? "OPEN — POURING TILL 8 PM" : "CLOSED — BACK AT 8 AM"}
              </span>
              <span>EST. 2019 · CORNER OF 5TH & JUNIPER</span>
            </div>
          </Reveal>

          <h1 className="mt-7 font-display font-extrabold tracking-[-0.02em] leading-[0.88]">
            <span className="block text-[clamp(3.2rem,9.5vw,7.5rem)] text-latte" aria-label="THE COFFEE">
              {line1 || "\u00A0"}
            </span>
            <span className="block text-[clamp(3.2rem,9.5vw,7.5rem)]">
              <span className="text-marigold" aria-label="IS FREE.">
                {line2 || "\u00A0"}
              </span>
            </span>
            <span className="block text-[clamp(2rem,6vw,4.6rem)] text-outline mt-2">FOREVER.</span>
          </h1>

          <Reveal delay={150}>
            <p className="mt-7 max-w-xl text-[15px] sm:text-lg leading-relaxed text-latte/75">
              Unlimited refills on everything we brew — drip, cold, espresso, mocha, all of it.
              No app, no membership, no catch. It's how we pour <em className="text-butter not-italic font-semibold">Crowfoot Roasters</em>,
              the beans we own — and it's how{" "}
              <em className="text-butter not-italic font-semibold">The Wall</em> shouts for every local business behind it.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#wall"
                className="group inline-flex items-center gap-3 bg-marigold text-ink font-display font-bold text-lg px-6 py-3.5 rounded-full hover:bg-butter active:scale-95 transition-all shadow-[0_4px_0_rgba(0,0,0,0.4)]"
              >
                Pin your promo on The Wall
                <IconArrow className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#free"
                className="group inline-flex items-center gap-2 font-mono text-[13px] tracking-wide text-latte/80 border border-latte/25 rounded-full px-5 py-3.5 hover:border-marigold hover:text-marigold transition-colors"
              >
                Wait — how is it free?
                <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <dl className="mt-10 grid grid-cols-3 max-w-lg gap-4 border-t border-latte/12 pt-6">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-latte/50">CUPS TODAY</dt>
                <dd className="font-display font-extrabold text-2xl sm:text-3xl text-marigold tabular-nums">
                  {cups.toLocaleString()}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-latte/50">FLYERS PINNED</dt>
                <dd className="font-display font-extrabold text-2xl sm:text-3xl text-sage tabular-nums">212</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-latte/50">YOU'VE PAID</dt>
                <dd className="font-display font-extrabold text-2xl sm:text-3xl text-cherry">$0.00</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* right: the room */}
        <div className="lg:col-span-5 relative">
          <Reveal delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-latte/15 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <img
                  src={IMG.room}
                  alt="Inside Bottomless — the community wall covered in local flyers"
                  className="kenburns w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roast/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <LetterBoard phrases={nowPouring} />
                </div>
              </div>

              <CircleStamp className="absolute -top-8 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 text-marigold drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)]" />

              <div className="absolute -bottom-5 -left-3 sm:-left-6 rotate-[-4deg] bg-foam text-ink shadow-[0_14px_30px_rgba(0,0,0,0.45)] px-4 py-3 w-44">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cherry shadow-inner" aria-hidden="true" />
                <p className="font-mono text-[11px] font-bold leading-snug">
                  WALL RENTAL
                  <br />
                  FROM $9 / WEEK
                </p>
                <p className="font-mono text-[9px] text-ink/55 mt-1">tear-off tab ↓ 214-0087</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* local promos marquee */}
      <div className="relative border-y border-latte/12 bg-bean/60 py-3.5">
        <Marquee speed={36}>
          {marqueePromos.map((p) => (
            <span key={p.biz} className="flex items-center gap-3 px-5 font-mono text-[13px] whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-marigold shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M12 2.5l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.6l-5.7 3.5 1.5-6.5-5-4.4 6.6-.6L12 2.5Z" />
              </svg>
              <span className="text-butter font-bold">{p.biz}</span>
              <span className="text-latte/60">— {p.offer}</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
