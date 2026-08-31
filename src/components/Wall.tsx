import { useMemo, useRef, useState, type CSSProperties, type FormEvent } from "react";
import {
  CAT_LABEL,
  neighborQuotes,
  PIN_COLORS,
  seedFlyers,
  wallPricing,
  type Flyer,
  type FlyerCat,
} from "../data";
import {
  IconMegaphone,
  IconPin,
  IconStar,
  IconTicket,
  PinDot,
  Reveal,
  usePrefersReducedMotion,
} from "../lib";

const FILTERS: { key: FlyerCat | "all"; label: string }[] = [
  { key: "all", label: "EVERYTHING" },
  { key: "food", label: "EAT & DRINK" },
  { key: "retail", label: "SHOP" },
  { key: "service", label: "SERVICES" },
  { key: "event", label: "HAPPENING" },
];

function FlyerCard({ flyer, index }: { flyer: Flyer; index: number }) {
  return (
    <article
      id={flyer.fresh ? "fresh-flyer" : undefined}
      className={`relative bg-foam text-ink rounded-[3px] px-5 pt-7 pb-4 shadow-[0_10px_24px_rgba(32,18,10,0.28)] transition-all duration-300 rotate-(--r) hover:z-20 hover:scale-[1.045] hover:rotate-0 hover:shadow-[0_22px_44px_rgba(32,18,10,0.45)] ${
        flyer.fresh ? "pin-flash" : ""
      }`}
      style={{ "--r": `${flyer.rot}deg` } as CSSProperties}
    >
      <PinDot color={flyer.pin} />
      <div className="flex items-center justify-between gap-2">
        <h4 className="font-display font-extrabold text-lg leading-tight tracking-tight">{flyer.biz}</h4>
      </div>
      <span className="inline-block mt-1.5 font-mono text-[9px] font-bold tracking-[0.18em] border border-ink/25 rounded-full px-2 py-0.5 text-ink/70">
        {CAT_LABEL[flyer.cat]}
      </span>
      <p className="mt-2.5 text-[13.5px] leading-snug text-ink/85 font-medium">{flyer.text}</p>
      <p className="mt-3 font-mono text-[10.5px] text-ink/55 border-t border-dashed border-ink/20 pt-2">
        {flyer.contact} <span className="float-right">{flyer.fresh ? "✦ PINNED JUST NOW" : flyer.pinnedAgo}</span>
      </p>
      <span
        className="pointer-events-none absolute bottom-1 right-2 font-mono text-[9px] text-ink/30"
        aria-hidden="true"
      >
        №{String(213 + index).padStart(3, "0")}
      </span>
    </article>
  );
}

export function Wall() {
  const reduced = usePrefersReducedMotion();
  const [flyers, setFlyers] = useState<Flyer[]>(seedFlyers);
  const [filter, setFilter] = useState<FlyerCat | "all">("all");
  const [biz, setBiz] = useState("");
  const [msg, setMsg] = useState("");
  const [cat, setCat] = useState<FlyerCat>("food");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [justPinned, setJustPinned] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => (filter === "all" ? flyers : flyers.filter((f) => f.cat === filter)),
    [flyers, filter],
  );

  function submit(e: FormEvent) {
    e.preventDefault();
    if (biz.trim().length < 2) return setError("Give your business a name — even a nickname.");
    if (msg.trim().length < 10) return setError("Ten characters minimum. Sell it a little.");
    setError("");
    const flyer: Flyer = {
      id: `you-${Date.now()}`,
      biz: biz.trim(),
      text: msg.trim(),
      cat,
      contact: contact.trim() || "ask at the counter",
      pin: PIN_COLORS[Math.floor(Math.random() * PIN_COLORS.length)],
      rot: Number((Math.random() * 8 - 4).toFixed(1)),
      fresh: true,
      pinnedAgo: "pinned just now",
    };
    setFlyers((f) => [flyer, ...f]);
    setFilter("all");
    setBiz("");
    setMsg("");
    setContact("");
    setJustPinned(true);
    setTimeout(() => setJustPinned(false), 2600);
    setTimeout(() => {
      document.getElementById("fresh-flyer")?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "center",
      });
    }, 80);
    setTimeout(() => {
      setFlyers((f) => f.map((x) => (x.id === flyer.id ? { ...x, fresh: false } : x)));
    }, 4000);
  }

  return (
    <section id="wall" className="relative bg-latte text-ink paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* header row */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-cherry">
                <IconMegaphone className="w-5 h-5" /> THE LOCAL LOUDSPEAKER
              </p>
              <h2 className="mt-4 font-display font-extrabold tracking-tight leading-[0.9] text-[clamp(2.6rem,6.5vw,5.2rem)]">
                Rent a pin.
                <br />
                <span className="text-outline-dark">Shout to the</span> neighborhood.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <p className="text-[15px] sm:text-base leading-relaxed text-ink/75 max-w-md">
                Half this shop is a corkboard, and it pays for your free coffee. A card costs less than a
                sandwich ad anywhere else — and it hangs where the whole block actually stands in line.
                <span className="font-semibold text-ink"> Wednesday nights we print flyers for free.</span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* pricing tickets */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {wallPricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div
                className={`relative h-full rounded-md border-2 border-dashed px-5 py-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(36,21,9,0.25)] ${
                  p.hot
                    ? "bg-ink text-latte border-ink rotate-[0.8deg] hover:rotate-0"
                    : "bg-foam text-ink border-ink/30 hover:border-ink " + (i % 2 ? "rotate-[-0.9deg] hover:rotate-0" : "rotate-[0.6deg] hover:rotate-0")
                }`}
              >
                {p.hot && (
                  <span className="absolute -top-3 right-4 bg-cherry text-foam font-mono text-[10px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-sm rotate-2">
                    MOST PINNED
                  </span>
                )}
                <span className={`absolute left-1/2 -translate-x-1/2 -top-2.5 w-5 h-5 rounded-full border-2 ${p.hot ? "bg-latte border-latte" : "bg-latte border-ink/30"}`} aria-hidden="true" />
                <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] opacity-70">
                  <IconTicket className="w-4 h-4" /> STUB {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display font-extrabold text-2xl tracking-tight">{p.name}</h3>
                <p className="mt-1 font-display font-extrabold text-4xl tracking-tight">
                  {p.price}
                  <span className="font-mono text-[11px] font-normal tracking-wide opacity-60 ml-2">{p.per}</span>
                </p>
                <ul className={`mt-4 space-y-1.5 text-[13px] font-medium ${p.hot ? "text-latte/85" : "text-ink/75"}`}>
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <IconStar className={`w-3 h-3 mt-1 shrink-0 ${p.hot ? "text-marigold" : "text-cherry"}`} />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* board + form */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* cork board */}
          <div className="lg:col-span-8">
            <div ref={boardRef} className="relative rounded-xl bg-cork cork-grain border-[6px] border-bean shadow-[inset_0_0_60px_rgba(0,0,0,0.5),0_24px_50px_rgba(36,21,9,0.35)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <p className="font-mono text-[11px] tracking-[0.22em] text-butter flex items-center gap-2">
                  <IconPin className="w-4 h-4" /> THE WALL — LIVE BOARD · {visible.length} UP RIGHT NOW
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {FILTERS.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => setFilter(f.key)}
                      className={`font-mono text-[10px] tracking-[0.12em] px-2.5 py-1.5 rounded-full border transition-all active:scale-90 ${
                        filter === f.key
                          ? "bg-marigold text-ink border-marigold font-bold"
                          : "text-latte/70 border-latte/25 hover:border-latte/60 hover:text-latte"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-9">
                {visible.map((f, i) => (
                  <FlyerCard key={f.id} flyer={f} index={i} />
                ))}
                {visible.length === 0 && (
                  <p className="font-mono text-sm text-latte/60 col-span-full text-center py-10">
                    Nothing pinned under this tag yet. Be first — it's good real estate.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* pin your promo form */}
          <div className="lg:col-span-4">
            <Reveal delay={120}>
              <form
                onSubmit={submit}
                className="sticky top-24 rounded-xl bg-foam border-2 border-ink shadow-[8px_8px_0_rgba(36,21,9,0.9)] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-extrabold text-2xl tracking-tight">PIN YOUR PROMO</h3>
                  {justPinned && (
                    <span className="stamp-press font-mono font-bold text-[11px] tracking-[0.15em] text-cherry border-2 border-cherry rounded px-2 py-1 -rotate-8">
                      PINNED!
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[13px] text-ink/65 font-medium">
                  Try it — this demo pins straight to the board on the left. The real wall pins Fridays at 6.
                </p>

                <label className="block mt-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink/55">BUSINESS / NAME *</span>
                  <input
                    value={biz}
                    onChange={(e) => setBiz(e.target.value)}
                    maxLength={32}
                    placeholder="e.g. Night Owl Tutoring"
                    className="mt-1.5 w-full bg-foam border-b-2 border-ink/30 focus:border-cherry outline-none font-display font-bold text-lg py-1.5 placeholder:font-body placeholder:font-normal placeholder:text-ink/30 transition-colors"
                  />
                </label>

                <label className="block mt-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ink/55 flex justify-between">
                    THE SHOUT <span>{msg.length}/110</span>
                  </span>
                  <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    maxLength={110}
                    rows={3}
                    placeholder="What's the offer? Keep it punchy — 110 characters."
                    className="mt-1.5 w-full bg-foam border-2 border-ink/25 focus:border-cherry outline-none rounded-md text-[14px] font-medium p-2.5 resize-none placeholder:text-ink/30 transition-colors"
                  />
                </label>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ink/55">CATEGORY</span>
                    <select
                      value={cat}
                      onChange={(e) => setCat(e.target.value as FlyerCat)}
                      className="mt-1.5 w-full bg-foam border-2 border-ink/25 focus:border-cherry outline-none rounded-md font-mono text-[12px] p-2 transition-colors"
                    >
                      {(Object.keys(CAT_LABEL) as FlyerCat[]).map((c) => (
                        <option key={c} value={c}>
                          {CAT_LABEL[c]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ink/55">CONTACT</span>
                    <input
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      maxLength={28}
                      placeholder="@handle / phone"
                      className="mt-1.5 w-full bg-foam border-2 border-ink/25 focus:border-cherry outline-none rounded-md font-mono text-[12px] p-2 placeholder:text-ink/30 transition-colors"
                    />
                  </label>
                </div>

                {error && (
                  <p className="mt-3 font-mono text-[11.5px] text-cherry font-bold border border-cherry/40 bg-cherry/8 rounded px-3 py-2">
                    ✕ {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 w-full group font-display font-bold text-lg bg-ink text-foam rounded-full py-3.5 hover:bg-cherry active:scale-[0.97] transition-all flex items-center justify-center gap-2.5 shadow-[0_4px_0_rgba(36,21,9,0.35)]"
                >
                  <IconPin className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                  Pin it to The Wall
                </button>
                <p className="mt-3 text-center font-mono text-[10px] text-ink/45">
                  Free for the first week. After that it's $9 — cheaper than a parking ticket.
                </p>
              </form>
            </Reveal>
          </div>
        </div>

        {/* neighbor quotes — scattered postcards */}
        <div className="mt-20">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.25em] text-cherry text-center">POSTCARDS FROM THE LINE</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborQuotes.map((q, i) => (
              <Reveal key={q.who} delay={i * 120}>
                <figure
                  className={`h-full bg-foam border border-ink/15 rounded-[3px] p-5 shadow-[0_10px_22px_rgba(36,21,9,0.18)] transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 ${
                    ["rotate-[-2deg]", "rotate-[1.6deg]", "rotate-[-1.2deg]", "rotate-[2.2deg]"][i % 4]
                  }`}
                >
                  <blockquote className="text-[14px] leading-snug font-medium text-ink/85">
                    <span className="font-display font-extrabold text-3xl text-cherry leading-none align-top mr-0.5">"</span>
                    {q.text}
                  </blockquote>
                  <figcaption className="mt-4 pt-3 border-t border-dashed border-ink/20 font-mono text-[10.5px] tracking-wide text-ink/55">
                    — {q.who}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
