<pre align="center">
        ) )      ( (
       ( (        ) )
     ┌────────────────┐
     │  ┌──────────┐  │]
     │  │          │  │
     │  │ BOTTOM-  │  │
     │  │  LESS    │  │
     │  └──────────┘  │
     └────────────────┘
      ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
</pre>

<h1 align="center">BOTTOMLESS — Free Coffee Social Club</h1>

<p align="center">
  <strong>The coffee is free. Forever.</strong> The shop is the ad. The neighborhood is the client.
</p>

<p align="center">
  <code>STATUS: POURING</code> · <code>CUPS TODAY: live</code> · <code>WALL FLYERS: 212</code> · <code>YOUR TAB: $0.00</code> · <code>CATCH: none</code>
</p>

---

## 00 · What you're reading

This is the operating manual, brand book, and build spec for **BOTTOMLESS** — a physical
corner shop that pours **unlimited free coffee, all day, every day**, and pays for itself two
ways: by being the tasting room for **Crowfoot Roasters** (a coffee brand we own), and by
running **The Wall**, the block's loudest local promo center.

The same repository builds the shop's web front — the part of the store you can visit from
couch distance.

> *"Nothing is free. Everything here is."* — painted above the espresso machine

---

## 01 · The pitch, in one breath

Most cafés sell coffee. We give it away — because a free, bottomless cup is the cheapest,
tastiest, most repeatable advertisement ever invented for the one product we actually sell:
**the beans we roast ourselves.** Meanwhile the other half of the shop is cork, shelf, and
screen space rented to every bakery, band, barber, and book club in the neighborhood.
Neighbors fund the grinder. The grinder funds the free cup. The free cup funds the roastery.

```
┌──────────────────────┐    roasted     ┌─────────────────────────┐
│  CROWFOOT ROASTERS   ├───────────────►│      BOTTOMLESS         │
│  (the brand we own)  │                │  pours every cup $0.00  │
└──────────┬───────────┘                └────────┬────────────────┘
           │                                     │
   tasters buy bags & mugs                THE WALL rents cork,
   at $14–16 / unit                       shelves, screen · $9–39/wk
           │                                     │
           └────────────►  funds the  ◄──────────┘
                              next
                          free cup
```

No venture money. No app. No membership. No catch — there is a business model, and it has
two legs.

---

## 02 · How "free" survives (the honest math)

| Leg | What happens | What it earns |
| --- | --- | --- |
| **The Roast** | Every free cup is a sample of Crowfoot Roasters, roasted by us, six blocks away | Bag sales $14–16, mug & merch margin |
| **The Wall** | Local businesses rent cork squares, a shelf, or screen time | $9 / $19 / $39 per week, ~200 flyers a season |
| **The Counter** | Pastries, beans by the scoop, brew gear — the only priced column on the menu | Keeps lights on, croissants golden |
| **The Pass** | Ten finished refills punch the Free Pour Pass | Buys loyalty for the cost of one croissant |

The house tattoo, above the machine: **finish what you pour, refill what you finish.**

---

## 03 · The product we own — Crowfoot Roasters

Every free cup doubles as a tasting flight. Win the cup, sell the bag.

| SKU | Roast | Notes | Price |
| --- | --- | --- | --- |
| Crowfoot · House Blend | medium-dark | cocoa, brown sugar, campfire | $14 / 250g |
| Crowfoot · Juniper Morning | light | bergamot, honey, apricot skin | $16 / 250g |
| Crowfoot · Midnight Shift | dark | molasses, toasted walnut, no mercy | $15 / 250g |
| The Bottomless Mug | ceramic | speckled, dishwasher-brave, wall-famous | $18 |

> Shout to any bag buyer from the shelf on The Wall for a week. Free. We like winners.

---

## 04 · The Wall — the local promo center

Half the shop is a corkboard with delusions of grandeur, and it is the entire point of the
second leg. Cheaper than a sandwich board, warmer than an algorithm, and it hangs exactly
where the whole block stands in line.

| Stub | Tier | Rent | You get |
| --- | --- | --- | --- |
| 01 | **A PIN ON THE CORK** | $9 / wk | one 4×6 card, prime cork, rotated weekly |
| 02 | **THE SHELF** | $19 / wk | eye-level shelf for flyers, zines, sample packs |
| 03 | **THE SCREEN** ⭐ | $39 / wk | 15 s of screen time on the order counter loop |
| 04 | **THE TAKEOVER** | $99 / day | whole front window, chalk art included, glory eternal |

- **Free print night — Wednesdays, 6–9 PM.** Bring your file; we print up to 50 flyers, free.
- Categories on the board: **EAT & DRINK · SHOP · SERVICES · HAPPENING.**
- First pin, first served. Bands, tutors, lost cats, sourdough startups — all welcome.
- The web build ships a working demo form: pin a promo and watch it land on the board, live.

---

## 05 · The menu — two columns, one with prices

| # | ALWAYS $0.00 · EVERY DAY | | Keeps the lights on | Price |
| --- | --- | --- | --- | --- |
| 01 | House drip, bottomless* | | Marigold croissant | $4 |
| 02 | Cold brew, bottomless* | | Cardamom bun | $4.50 |
| 03 | Espresso & Americano, bottomless* | | Crowfoot beans, by the scoop | $6 |
| 04 | Café de olla & mocha, bottomless* | | Beans by the bag (Crowfoot) | $14–16 |
| 05 | Oat & whole milk, on the house | | Brew gear & filters | varies |

`*` Refills are self-serve. The pot is six feet from your seat. This is a trust exercise
with caffeine.

---

## 06 · The week, as usual

| Day | On the board | Time |
| --- | --- | --- |
| MON | Open decks — bring cards, bring people | 7 PM |
| TUE | Free mending night (bring the hole, leave with a patch) | 6 PM |
| WED | **Free print night** — 50 flyers, on us | 6–9 PM |
| THU | Cupping of the new Crowfoot roast — tastes free, bags $14 | 5 PM |
| FRI | Wall refresh — new pins go up at 6, loud opinions encouraged | 6 PM |
| SAT | Long-table breakfast, toastie is $8 and magnificent | 9 AM |
| SUN | Vinyl swap + slow coffee, no clock on this one | all day |

Every event: bottomless coffee, obviously.

---

## 07 · The Free Pour Pass

Coffee is already free — so the punch card rewards *finishing* what you pour.

- **1 punch** = 1 finished free refill (honor system).
- **10 punches** = a Marigold croissant + a shelf shout-out on The Wall.
- Lives in the browser, like all great wallets. Never expires. Never checked. Punch yourself.

---

## 08 · Visit

| | |
| --- | --- |
| **Where** | 512 Juniper Corner, Old Mill District — corner of 5th & Juniper, follow the steam |
| **When** | Mon–Sun · 8:00 AM – 8:00 PM (pot on at 7:45; we have never been late — ask us about the one time) |
| **Say hi** | `hello@bottomless.club` · (555) 010-8207 |
| **Rent the wall** | `wall@bottomless.club` |

---

## 09 · The web build

A single-page promo built with **React 18 · Vite 6 · Tailwind CSS v4 · TypeScript**. No
router — one poster, scrolled like a menu. Every number that moves on the page moves for a
reason.

### Design tokens

| Role | Token | Hex |
| --- | --- | --- |
| Ink / roast darks | `roast` `bean` `cocoa` `ink` | `#20120A` `#33200F` `#4A2F17` `#241509` |
| Paper / creams | `latte` `foam` | `#F0E2CB` `#FAF2E1` |
| Marigold (the shout) | `marigold` / `butter` | `#FFB63D` / `#FFD878` |
| Cherry (the pin) | `cherry` | `#E4572E` |
| Sage (the open light) | `sage` | `#A9C47F` |

| Face | Job |
| --- | --- |
| **Bricolage Grotesque** 800 | Display — poster type, headlines, menu names |
| **Instrument Sans** | Body — the readable column |
| **Space Mono** | Tickets, stubs, stamps, small print, the whole receipt energy |

### Anatomy

```
├── index.html              fonts + shell
└── src/
    ├── main.tsx            entry
    ├── App.tsx             composition + live "cups today" counter
    ├── data.ts             every word on the site (menu, promos, events, quotes)
    ├── images.ts           photography
    ├── lib.tsx             hooks & primitives: scramble-decode, letterboard,
    │                       marquee, scroll reveals, clock, hand-drawn SVG icons
    ├── index.css           theme tokens + full motion system
    └── components/
        ├── Chrome.tsx      sticky header (live open/closed, cups chip) + big-type footer
        ├── Opening.tsx     the poster wall — hero, stamp, letterboard, promos marquee
        ├── Wall.tsx        THE WALL — pricing stubs, cork board, live pin form, postcards
        └── Sections.tsx    why-free · menu · punch-card pass · the week · visit/map
```

### Living elements

- Scramble-decoding headline on load; NOW POURING letterboard with flip ticks
- Open/closed badge driven by the real clock, with pulsing status dot
- Ticking cups-poured counter in header and hero
- Cork board with category filters; **the pin form posts a flyer to the board in real time**
- Punch card with press animation, localStorage persistence, reward + redeem stamp
- Ken Burns photography, rotating NO CATCH stamp, dual marquees, scroll reveals
- Noise-grain overlay; full `prefers-reduced-motion` fallback for every animation

### Run it

```sh
npm install
npm run dev        # local pour
npm run build      # dist/ — hand it to anyone
```

---

## 10 · FAQ, from skeptics in the line

**Wait — how is it free?**
We own the roastery and rent the wall. Two legs, disclosed in section 02, tattooed in section 01.

**Is there a catch?**
The catch is that you might start buying our beans. It works.

**Unlimited, really? Eleven cups?**
Eleven. Forty. A wedding party once did two hundred and six. We counted; they paid in flyers.

**Can I take it to go?**
Yes — bring your own mug and we'll add a punch to your pass for the container karma.

**My business isn't coffee-adjacent. Can I still pin?**
The Wall has hosted a taxidermy class, a chess club, and a very persuasive lost-parrot
campaign. Pin away.

**Do I have to buy something?**
The coffee demands nothing. The croissant demands everything.

---

## 11 · House rules

1. Finish what you pour. Refill what you finish.
2. Mugs on the shelf are community property. So, briefly, are you.
3. The Wall is first-pin, first-served. Envy is not a rental tier.
4. Loud ideas welcome; loud phones, less so.
5. Kindness is the cover charge. It has never been collected, and it always is.

---

<p align="center"><code>BOTTOMLESS · EST. 2019 · 5TH & JUNIPER · THE POT GOES ON AT 7:45</code></p>
