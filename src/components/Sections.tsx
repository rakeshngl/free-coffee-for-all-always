import { useEffect, useState, type FormEvent } from "react";
import { freeMenu, paidMenu, weekEvents } from "../data";
import { IMG } from "../images";
import {
  IconArrow,
  IconBean,
  IconCup,
  IconMegaphone,
  IconPin,
  IconSteamCup,
  IconTicket,
  Reveal,
  usePrefersReducedMotion,
} from "../lib";

/* =========================================================
   WHY IT'S FREE — sticky two-column
========================================================= */
const freeMath = [
  {
    n: "01",
    icon: <IconBean className="w-8 h-8" />,
    title: "WE OWN THE ROAST",
    body: "Every free cup pours Crowfoot Roasters — the coffee we roast ourselves six blocks away. Your endless refills are our tasting room. Love the cup? The bag is $14 on the shelf. That's the whole product story.",
    img: IMG.beans,
  },
  {
    n: "02",
    icon: <IconPin className="w-8 h-8" />,
    title: "THE WALL PAYS RENT",
    body: "Local businesses rent cork, shelves and screen time from $9 a week. Two hundred flyers a season keep the grinder humming, the lights warm, and your mug full. Advertising, but it smells like espresso.",
    img: undefined,
  },
  {
    n: "03",
    icon: <IconCup className="w-8 h-8" />,
    title: "YOU JUST WALK IN",
    body: "No app. No punch-card-to-enter. No minimum order, no tip screen guilt-trip on the free cup. One house rule, tattooed above the machine: finish what you pour, refill what you finish.",
    img: undefined,
  },
];

export function WhyFree() {
  return (
    <section id="free" className="relative bg-roast text-latte overflow-hidden">
      <div className="pointer-events-none absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-cocoa/40 blur-[130px]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.25em] text-marigold">THE MATH, FULLY DISCLOSED</p>
              <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,6vw,5rem)]">
                Nothing is free.
                <br />
                <span className="text-marigold">Everything here is.</span>
              </h2>
              <p className="mt-6 text-latte/70 max-w-md leading-relaxed text-[15px]">
                People assume there's a trick. There isn't — there's a business model, and it has two legs:
                a roastery we own, and a wall your neighbors rent. Here's the whole trick, unfolded.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 relative rounded-xl overflow-hidden border border-latte/15 w-56 rotate-[-2.5deg] shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
                <img src={IMG.pour} alt="Crowfoot coffee being poured — free, on the house" className="w-full h-64 object-cover" />
                <span className="absolute bottom-2 left-2 font-mono text-[10px] tracking-[0.18em] bg-ink/85 text-butter px-2 py-1 rounded">
                  COST TO YOU: $0.00
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          {freeMath.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="group border-t border-latte/15 py-10 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-start transition-all duration-300 hover:bg-bean/40 hover:px-5 rounded-lg">
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-latte/20 group-hover:text-marigold transition-colors duration-300 tabular-nums">
                  {s.n}
                </span>
                <div>
                  <p className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] text-marigold">
                    {s.icon}
                    {s.title}
                  </p>
                  <p className="mt-3 text-latte/75 leading-relaxed max-w-lg text-[15px]">{s.body}</p>
                </div>
                {s.img ? (
                  <img
                    src={s.img}
                    alt="Crowfoot Roasters — the beans we own"
                    className="hidden sm:block w-28 h-28 object-cover rounded-lg border border-latte/15 rotate-2 group-hover:rotate-0 transition-transform duration-500"
                  />
                ) : (
                  <IconArrow className="hidden sm:block w-6 h-6 text-latte/25 group-hover:text-marigold group-hover:translate-x-1 transition-all duration-300" />
                )}
              </div>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <div className="border-t border-latte/15 py-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[12px] tracking-wide text-latte/55">
              <span>INCOMING: beans we roast</span>
              <IconArrow className="w-4 h-4 text-marigold" />
              <span>POURED: free, all day</span>
              <IconArrow className="w-4 h-4 text-marigold" />
              <span>OUTGOING: bags, mugs, wall rent</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MENU
========================================================= */
export function Menu() {
  return (
    <section id="menu" className="relative bg-foam text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-cherry">
              <IconSteamCup className="w-7 h-7" /> THE BOARD ABOVE THE MACHINE
            </p>
            <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,6vw,5rem)]">
              Two columns.
              <br />
              <span className="text-outline-dark">Only one has prices.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative w-64 sm:w-80 rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
              <img src={IMG.pastry} alt="Marigold croissants — the paid part, worth it" className="rounded-lg shadow-[0_18px_36px_rgba(36,21,9,0.3)] w-full h-40 sm:h-48 object-cover" />
              <span className="absolute -bottom-3 left-4 bg-ink text-butter font-mono text-[10px] tracking-[0.15em] px-2.5 py-1 rounded rotate-[-2deg]">
                THE PAID PART, WORTH IT
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* free side */}
          <Reveal>
            <div className="h-full rounded-xl bg-ink text-latte p-7 sm:p-9 relative overflow-hidden">
              <span className="absolute -top-7 -right-4 font-display font-extrabold text-[9rem] leading-none text-latte/6 select-none" aria-hidden="true">
                $0
              </span>
              <p className="font-mono text-[11px] tracking-[0.25em] text-marigold">COLUMN ONE</p>
              <h3 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                Always $0<span className="text-marigold">.</span> Every day<span className="text-marigold">.</span>
              </h3>
              <ul className="mt-7 space-y-5">
                {freeMenu.map((m, i) => (
                  <li key={m.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display font-bold text-xl group-hover:text-marigold transition-colors">{m.name}</span>
                      <span className="flex-1 border-b-2 border-dotted border-latte/25 translate-y-[-4px] group-hover:border-marigold/50 transition-colors" />
                      <span className="font-mono font-bold text-marigold tabular-nums">$0.00</span>
                    </div>
                    <p className="mt-1 text-[13px] text-latte/55 font-mono">
                      <span className="text-latte/35">{String(i + 1).padStart(2, "0")}</span> · {m.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-5 border-t border-latte/15 font-mono text-[11.5px] text-latte/60 leading-relaxed">
                * Refills are self-serve. The pot is six feet from your seat. This is a trust exercise with caffeine.
              </p>
            </div>
          </Reveal>

          {/* paid side */}
          <Reveal delay={130}>
            <div className="h-full rounded-xl bg-latte border-2 border-ink/15 p-7 sm:p-9 relative">
              <p className="font-mono text-[11px] tracking-[0.25em] text-cherry">COLUMN TWO</p>
              <h3 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                Keeps the lights on<span className="text-cherry">.</span>
              </h3>
              <ul className="mt-7 space-y-5">
                {paidMenu.map((m) => (
                  <li key={m.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display font-bold text-xl group-hover:text-cherry transition-colors">{m.name}</span>
                      <span className="flex-1 border-b-2 border-dotted border-ink/25 translate-y-[-4px] group-hover:border-cherry/50 transition-colors" />
                      <span className="font-mono font-bold text-ink tabular-nums">{m.price}</span>
                    </div>
                    <p className="mt-1 text-[13px] text-ink/55 font-mono">◆ {m.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-5 border-t border-ink/15 flex items-start gap-3">
                <IconMegaphone className="w-5 h-5 text-cherry shrink-0 mt-0.5" />
                <p className="text-[13px] text-ink/70 font-medium leading-relaxed">
                  Every free cup is a sample of the roast we own. If it wins you over, the beans are on the
                  shelf — and that's exactly how your next free cup gets funded.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FREE POUR PASS — interactive punch card
========================================================= */
const PASS_KEY = "bottomless-pass-punches";
const REWARD = "A Marigold croissant + a shelf shout-out on The Wall. Show the card to any barista.";

export function Pass() {
  const reduced = usePrefersReducedMotion();
  const [punches, setPunches] = useState<number>(() => {
    try {
      return Math.min(10, Number(localStorage.getItem(PASS_KEY)) || 0);
    } catch {
      return 0;
    }
  });
  const [shaking, setShaking] = useState(false);
  const [redeemed, setRedeemed] = useState(false);
  const unlocked = punches >= 10;

  useEffect(() => {
    try {
      localStorage.setItem(PASS_KEY, String(punches));
    } catch {
      /* private mode — fine */
    }
  }, [punches]);

  function punch() {
    if (unlocked || shaking) return;
    setPunches((p) => p + 1);
    if (!reduced) {
      setShaking(true);
      setTimeout(() => setShaking(false), 450);
    }
  }

  return (
    <section id="pass" className="relative bg-marigold text-ink overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/3 w-[420px] h-[420px] rounded-full bg-butter blur-[100px] opacity-70" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-cherry">
              <IconTicket className="w-5 h-5" /> THE FREE POUR PASS
            </p>
            <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(2.6rem,6vw,5rem)]">
              Coffee's already free.
              <br />
              <span className="text-outline-dark">So what's the punch card for?</span>
            </h2>
            <p className="mt-6 max-w-md text-ink/80 font-medium leading-relaxed text-[15px]">
              Every refill you actually finish earns a punch. Ten punches buys you something money
              can't: pastry, shelf fame, and the barista's begrudging respect. The card lives in your
              browser — like all great wallets.
            </p>
            <ul className="mt-6 space-y-2.5 font-mono text-[13px] text-ink/75">
              <li className="flex gap-3"><span className="text-cherry font-bold">✳</span> 1 punch = 1 finished free refill (honor system, obviously)</li>
              <li className="flex gap-3"><span className="text-cherry font-bold">✳</span> 10 punches = the reward below, no expiry, ever</li>
              <li className="flex gap-3"><span className="text-cherry font-bold">✳</span> Lost your card? We've never once checked. Punch yourself.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className={`relative ${shaking ? "card-shake" : ""}`}>
            <div className="relative bg-ink text-latte rounded-xl p-7 sm:p-8 shadow-[0_30px_60px_rgba(36,21,9,0.45)] rotate-[-1.2deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-marigold" aria-hidden="true" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 rounded-full bg-marigold" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-marigold">BOTTOMLESS · LOYALTY-ISH</p>
                  <p className="font-display font-extrabold text-2xl tracking-tight">FREE POUR PASS</p>
                </div>
                <span className="font-mono text-[11px] text-latte/60 border border-latte/25 rounded px-2 py-1 tabular-nums">
                  {punches}/10
                </span>
              </div>

              <div className="mt-6 grid grid-cols-5 gap-3 sm:gap-4">
                {Array.from({ length: 10 }).map((_, i) => {
                  const punched = i < punches;
                  return (
                    <div
                      key={i}
                      className={`relative aspect-square rounded-full grid place-items-center transition-colors duration-300 ${
                        punched ? "bg-marigold" : "border-2 border-dashed border-latte/35"
                      }`}
                    >
                      {punched ? (
                        <span className={`punch-in ${i === punches - 1 ? "" : ""}`}>
                          <svg viewBox="0 0 24 24" className="w-1/2 h-1/2 text-ink" fill="currentColor" aria-hidden="true">
                            <path d="M12 2.5l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.6l-5.7 3.5 1.5-6.5-5-4.4 6.6-.6L12 2.5Z" />
                          </svg>
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-latte/35">{i + 1}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {unlocked && !redeemed && (
                <div className="mt-6 border-2 border-dashed border-marigold rounded-lg p-4">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-marigold font-bold">✦ REWARD UNLOCKED ✦</p>
                  <p className="mt-1.5 text-[13.5px] text-latte/85 font-medium">{REWARD}</p>
                  <button
                    onClick={() => setRedeemed(true)}
                    className="mt-3 font-display font-bold bg-marigold text-ink rounded-full px-5 py-2 hover:bg-butter active:scale-95 transition-all"
                  >
                    Redeem at the counter
                  </button>
                </div>
              )}
              {redeemed && (
                <p className="mt-6 stamp-press inline-block font-mono font-bold text-[12px] tracking-[0.15em] text-marigold border-2 border-marigold rounded px-3 py-1.5">
                  REDEEMED — ENJOY THE CROISSANT
                </p>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={punch}
                  disabled={unlocked}
                  className="flex-1 font-display font-bold text-lg bg-marigold text-ink rounded-full py-3.5 hover:bg-butter active:scale-[0.97] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_0_rgba(0,0,0,0.4)]"
                >
                  {unlocked ? "CARD FULL" : "PUNCH MY REFILL"}
                </button>
                <button
                  onClick={() => {
                    setPunches(0);
                    setRedeemed(false);
                  }}
                  className="font-mono text-[11px] tracking-wide text-latte/60 border border-latte/25 rounded-full px-4 py-3 hover:text-marigold hover:border-marigold transition-colors"
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   THE WEEK
========================================================= */
export function Events() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon = 0
  return (
    <section id="events" className="relative bg-roast text-latte overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-cocoa/45 blur-[120px]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.25em] text-marigold">THE WEEK, AS USUAL</p>
              <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,5.5vw,4.5rem)]">
                Something on,
                <br />
                <span className="text-marigold">every single day.</span>
              </h2>
              <p className="mt-6 text-latte/70 leading-relaxed max-w-sm text-[15px]">
                All of it free except the toastie. The toastie is $8 and it's magnificent. Coffee at every
                event is, as always, bottomless.
              </p>
              <p className="mt-8 font-mono text-[12px] text-latte/50">
                <span className="text-sage">●</span> highlighted = today, wherever "today" finds you.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {weekEvents.map((ev, i) => {
              const isToday = i === todayIdx;
              return (
                <Reveal key={ev.day} delay={i * 70}>
                  <div
                    className={`event-row group grid grid-cols-[64px_1fr_auto] sm:grid-cols-[90px_1fr_auto_auto] items-center gap-4 border-t border-latte/12 py-5 px-3 rounded-md ${
                      isToday ? "bg-bean/70 border-l-4 border-l-marigold" : "hover:bg-bean/40"
                    }`}
                  >
                    <span className={`font-mono font-bold text-sm tracking-[0.2em] ${isToday ? "text-marigold" : "text-latte/45"}`}>
                      {ev.day}
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-latte/90 group-hover:text-marigold transition-colors leading-snug">
                      {ev.title}
                      {isToday && (
                        <span className="ml-3 align-middle font-mono text-[10px] font-bold tracking-[0.18em] bg-marigold text-ink rounded-full px-2.5 py-1">
                          TONIGHT
                        </span>
                      )}
                    </span>
                    {ev.tag && (
                      <span className="hidden sm:inline font-mono text-[10px] tracking-[0.15em] text-cherry border border-cherry/50 rounded-full px-2.5 py-1">
                        {ev.tag}
                      </span>
                    )}
                    <span className="font-mono text-[12px] text-latte/55 tabular-nums justify-self-end">{ev.time}</span>
                  </div>
                </Reveal>
              );
            })}
            <div className="border-t border-latte/12" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VISIT
========================================================= */
export function Visit() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);

  function subscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || email.length < 5) {
      setErr(true);
      setNote("");
      return;
    }
    setErr(false);
    setNote(`You're on the list. First Corkboard Weekly lands Sunday — new wall pins, roast drop, and one (1) bad pun.`);
    setEmail("");
  }

  return (
    <section id="visit" className="relative bg-latte text-ink paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.25em] text-cherry">FIND THE FREE COFFEE</p>
            <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,5.5vw,4.5rem)]">
              Corner of 5th
              <br />
              <span className="text-outline-dark">& Juniper.</span> Look for the wall.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-8 space-y-5 max-w-md">
              <div className="flex gap-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-ink/50 w-20 shrink-0 pt-1">HOURS</dt>
                <dd className="font-mono text-[13px] leading-relaxed text-ink/80">
                  Mon–Sun · 8:00 AM – 8:00 PM
                  <br />
                  <span className="text-ink/50">The pot goes on at 7:45. We've never been late. Ask us about the one time.</span>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-ink/50 w-20 shrink-0 pt-1">ADDRESS</dt>
                <dd className="font-mono text-[13px] text-ink/80">
                  512 Juniper Corner, Old Mill District
                  <br />
                  <a
                    className="link-sweep text-cherry font-bold"
                    href="https://maps.google.com/?q=512+Juniper+Corner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions ↗
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-ink/50 w-20 shrink-0 pt-1">SAY HI</dt>
                <dd className="font-mono text-[13px] text-ink/80">
                  hello@bottomless.club · (555) 010-8207
                  <br />
                  <span className="text-ink/50">For wall rentals: wall@bottomless.club</span>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={200}>
            <form onSubmit={subscribe} className="mt-9 max-w-md">
              <p className="font-mono text-[10px] tracking-[0.2em] text-ink/55">THE CORKBOARD — WEEKLY EMAIL OF NEW WALL PROMOS</p>
              <div className="mt-2 flex gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@neighborhood.fm"
                  className="flex-1 bg-foam border-2 border-ink/25 focus:border-cherry outline-none rounded-full font-mono text-[13px] px-4 py-3 placeholder:text-ink/30 transition-colors"
                />
                <button
                  type="submit"
                  className="font-display font-bold bg-ink text-foam rounded-full px-6 hover:bg-cherry active:scale-95 transition-all"
                >
                  Join
                </button>
              </div>
              {note && <p className="mt-3 font-mono text-[12px] text-ink/75 bg-sage/40 border border-sage rounded-lg px-3 py-2">✦ {note}</p>}
              {err && <p className="mt-3 font-mono text-[12px] text-cherry font-bold">That email looks off — try again?</p>}
            </form>
          </Reveal>
        </div>

        {/* hand-drawn map */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="relative rounded-xl overflow-hidden border-2 border-ink/15 shadow-[0_24px_50px_rgba(36,21,9,0.25)] bg-foam">
              <svg viewBox="0 0 640 460" className="w-full h-auto" role="img" aria-label="Hand-drawn map: Bottomless sits at the corner of 5th and Juniper, by the river and the Old Mill">
                <rect width="640" height="460" fill="#faf2e1" />
                {/* river */}
                <path d="M-10 360 C120 330 180 400 320 380 S560 330 660 370 L660 470 L-10 470 Z" fill="#c9d9c0" opacity="0.7" />
                <path d="M-10 360 C120 330 180 400 320 380 S560 330 660 370" stroke="#a9c47f" strokeWidth="3" fill="none" />
                {/* streets */}
                <g stroke="#241509" strokeOpacity="0.28" strokeWidth="10" strokeLinecap="round">
                  <path d="M40 -10 V470" /><path d="M170 -10 V470" /><path d="M300 -10 V372" /><path d="M430 -10 V360" /><path d="M560 -10 V352" />
                  <path d="M-10 90 H650" /><path d="M-10 210 H650" /><path d="M-10 320 H650" />
                </g>
                <g fontFamily="Space Mono, monospace" fontSize="12" fill="#241509" fillOpacity="0.5">
                  <text x="185" y="60" transform="rotate(90 185 60)">JUNIPER ST →</text>
                  <text x="330" y="182" transform="rotate(90 330 182)">5TH AVE →</text>
                  <text x="24" y="80">MILL ROW</text>
                  <text x="470" y="310">OLD MILL PARK</text>
                  <text x="40" y="430" fill="#6f8a58" fillOpacity="0.9">~ the river, slow as ever ~</text>
                </g>
                {/* blocks */}
                <g fill="#241509" fillOpacity="0.07">
                  <rect x="55" y="105" width="100" height="90" rx="6" />
                  <rect x="345" y="105" width="70" height="90" rx="6" />
                  <rect x="455" y="105" width="90" height="90" rx="6" />
                  <rect x="55" y="235" width="100" height="70" rx="6" />
                  <rect x="455" y="230" width="90" height="70" rx="6" />
                </g>
                {/* the shop */}
                <g>
                  <circle cx="315" cy="210" r="46" fill="#ffb63d" opacity="0.22" />
                  <circle cx="315" cy="210" r="36" fill="#ffb63d" opacity="0.3" />
                  <circle cx="315" cy="210" r="26" fill="#e4572e" stroke="#faf2e1" strokeWidth="4" />
                  <path d="M305 203h20v8a9 9 0 0 1-9 9h-2a9 9 0 0 1-9-9v-8Z" fill="#faf2e1" />
                  <path d="M325 205h3a4 4 0 0 1 0 8h-3" stroke="#faf2e1" strokeWidth="2.4" fill="none" />
                </g>
                <g fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fill="#241509">
                  <text x="315" y="268" textAnchor="middle" fontSize="19">BOTTOMLESS</text>
                  <text x="315" y="286" textAnchor="middle" fontSize="11" fontFamily="Space Mono, monospace" fontWeight="400" fillOpacity="0.6">5TH & JUNIPER — FOLLOW THE STEAM</text>
                </g>
                {/* landmarks */}
                <g fontFamily="Space Mono, monospace" fontSize="10" fill="#241509" fillOpacity="0.65">
                  <text x="80" y="155">🌾 old mill</text>
                  <text x="472" y="152">books ↑</text>
                  <text x="70" y="275">records →</text>
                  <text x="470" y="270">bakery (smell it)</text>
                </g>
                <g stroke="#241509" strokeOpacity="0.35" strokeWidth="2" fill="none" strokeDasharray="5 7">
                  <path d="M315 236 C310 300 380 330 380 372" />
                </g>
              </svg>
              <span className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.18em] bg-ink text-butter px-2.5 py-1.5 rounded">
                NOT TO SCALE — TO VIBE
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
