import { Marquee, useOpenStatus } from "../lib";

const NAV = [
  { href: "#free", label: "How it's free" },
  { href: "#wall", label: "The Wall" },
  { href: "#menu", label: "Menu" },
  { href: "#pass", label: "The Pass" },
  { href: "#events", label: "Week" },
  { href: "#visit", label: "Visit" },
];

export function Header({ cups }: { cups: number }) {
  const { open } = useOpenStatus();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-roast/90 backdrop-blur-sm border-b border-latte/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-marigold text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <svg viewBox="0 0 32 32" className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M8 13h13v5.5a6.5 6.5 0 0 1-6.5 6.5h0A6.5 6.5 0 0 1 8 18.5V13Z" />
              <path d="M21 14.5h2a3 3 0 0 1 0 6h-2" />
              <path d="M12 6.5c-1 1.5 1 2 0 3.5M17 6.5c-1 1.5 1 2 0 3.5" />
            </svg>
          </span>
          <span className="leading-none">
            <span className="block font-display font-extrabold text-lg tracking-tight text-latte">BOTTOMLESS</span>
            <span className="block font-mono text-[10px] tracking-[0.28em] text-latte/55">COFFEE SOCIAL CLUB</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 font-mono text-[12px] tracking-wide text-latte/70">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-sweep hover:text-marigold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] text-latte/70 border border-latte/15 rounded-full px-3 py-1.5">
            <span className={`relative w-2 h-2 rounded-full ${open ? "bg-sage text-sage" : "bg-cherry text-cherry"} pulse-dot`} />
            {cups.toLocaleString()} cups poured today
          </span>
          <a
            href="#wall"
            className="font-mono text-[12px] font-bold tracking-wide bg-marigold text-ink px-4 py-2 rounded-full hover:bg-butter active:scale-95 transition-all shadow-[0_2px_0_rgba(0,0,0,0.35)]"
          >
            PIN A PROMO
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-roast text-latte border-t border-latte/10 overflow-hidden">
      <div className="py-4 border-b border-latte/10">
        <Marquee speed={22} reverse>
          {["THE COFFEE IS FREE", "THE WALL IS LOUD", "THE BEANS ARE OURS", "THE DOOR IS OPEN"].map((t) => (
            <span key={t} className="flex items-center gap-6 px-6 font-mono text-[13px] tracking-[0.2em] text-latte/60">
              {t}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-marigold" fill="currentColor">
                <path d="M12 2.5l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.6l-5.7 3.5 1.5-6.5-5-4.4 6.6-.6L12 2.5Z" />
              </svg>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <p
          className="font-display font-extrabold tracking-tight leading-[0.85] text-[clamp(3.5rem,14vw,12rem)] text-outline opacity-80 select-none"
          aria-hidden="true"
        >
          BOTTOMLESS
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-marigold mb-3">THE FINE PRINT</p>
            <p className="text-latte/70 text-sm leading-relaxed max-w-xs">
              Free coffee funded by bean nerds and wall rentals. No app, no membership, no minimum purchase,
              no "sign up for our newsletter to unlock." The door is the only funnel.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-marigold mb-3">STILL HERE?</p>
            <ul className="space-y-2 font-mono text-[13px] text-latte/70">
              {["#free — the math", "#wall — rent a pin", "#pass — punch holes", "#events — this week", "#visit — find us"].map((l) => {
                const [href, label] = l.split(" — ");
                return (
                  <li key={href}>
                    <a href={href} className="link-sweep hover:text-butter transition-colors">
                      {label} <span className="text-latte/40">↗ {href}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-marigold mb-3">THE ROAST WE OWN</p>
            <p className="text-latte/70 text-sm leading-relaxed">
              Crowfoot Roasters — roasted six blocks away, poured here for free, sold by the bag on the paid shelf.
            </p>
            <p className="mt-4 font-mono text-[12px] text-latte/50">
              512 Juniper Corner · Old Mill District
              <br />
              hello@bottomless.club · (555) 010-8207
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-latte/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-latte/40">
          <span>© {new Date().getFullYear()} Bottomless Coffee Social Club. Coffee $0 forever.</span>
          <span>
            Brewed, not templated. <span className="text-marigold">★</span> Pinned daily at 6PM.
          </span>
        </div>
      </div>
    </footer>
  );
}
