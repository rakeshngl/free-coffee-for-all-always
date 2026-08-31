export type FlyerCat = "food" | "retail" | "service" | "event";

export interface Flyer {
  id: string;
  biz: string;
  text: string;
  cat: FlyerCat;
  contact: string;
  pin: string; // pin head color
  rot: number; // rotation deg
  fresh?: boolean;
  pinnedAgo: string;
}

export const PIN_COLORS = ["#e4572e", "#ffb63d", "#a9c47f", "#f0e2cb", "#c98a4b"];

export const CAT_LABEL: Record<FlyerCat, string> = {
  food: "EAT & DRINK",
  retail: "SHOP",
  service: "SERVICES",
  event: "HAPPENING",
};

export const marqueePromos: { biz: string; offer: string }[] = [
  { biz: "Marigold Bakery", offer: "croissants land 8:04 AM sharp" },
  { biz: "Pedal & Spoke", offer: "free brake check every Saturday" },
  { biz: "Old Mill Books", offer: "2-for-1 paperbacks — wall card #14" },
  { biz: "Fern & Fray Florals", offer: "wilted-bouquet discount after 4PM" },
  { biz: "Juniper Records", offer: "B-sides listening night, Thursdays" },
  { biz: "Brickhouse Barbers", offer: "walk-ins before noon, $5 off" },
  { biz: "The Mending Room", offer: "visible-mending workshop Sundays" },
  { biz: "Salt Path Yoga", offer: "first flow free with any wall flyer" },
  { biz: "Crowfoot Roasters", offer: "the beans in your free cup — ours" },
  { biz: "Hollow Ceramics", offer: "seconds sale, every first Friday" },
];

export const seedFlyers: Flyer[] = [
  {
    id: "f1",
    biz: "Marigold Bakery",
    text: "Day-old sourdough, half price, 5PM till the tray is empty. Ask for the heel ends — they're the good part.",
    cat: "food",
    contact: "@marigold.bakes",
    pin: "#e4572e",
    rot: -3.5,
    pinnedAgo: "pinned 2h ago",
  },
  {
    id: "f2",
    biz: "Pedal & Spoke",
    text: "Bring your bike in Saturday morning. Brake check is free. Coffee while you wait is also free. Obviously.",
    cat: "service",
    contact: "14 Foundry Ln",
    pin: "#a9c47f",
    rot: 2.4,
    pinnedAgo: "pinned 5h ago",
  },
  {
    id: "f3",
    biz: "Old Mill Books",
    text: "Mystery bag of paperbacks: $6. One is always a crime novel. We don't know which. That's the deal.",
    cat: "retail",
    contact: "oldmillbooks.shop",
    pin: "#ffb63d",
    rot: -1.8,
    pinnedAgo: "pinned yesterday",
  },
  {
    id: "f4",
    biz: "Salt Path Yoga",
    text: "Rooftop flow at sunrise, pay-what-you-can. Show any flyer from this wall for your first class free.",
    cat: "event",
    contact: "saltpath@rise.fm",
    pin: "#f0e2cb",
    rot: 3.2,
    pinnedAgo: "pinned yesterday",
  },
  {
    id: "f5",
    biz: "Juniper Records",
    text: "B-sides & bootlegs night, Thursday 7PM. Bring a record, leave with a different one. Swap table open.",
    cat: "event",
    contact: "@juniperrecs",
    pin: "#c98a4b",
    rot: -2.6,
    pinnedAgo: "pinned 2 days ago",
  },
  {
    id: "f6",
    biz: "The Mending Room",
    text: "Torn elbow? Missing button? Sunday mending bar — bring the garment, borrow the machine, split the thread.",
    cat: "service",
    contact: "mendingroom.net",
    pin: "#a9c47f",
    rot: 1.6,
    pinnedAgo: "pinned 3 days ago",
  },
  {
    id: "f7",
    biz: "Hollow Ceramics",
    text: "Seconds sale every first Friday. Slightly wonky mugs, fully functional coffee vessels. $8–$15.",
    cat: "retail",
    contact: "hollowceramics.co",
    pin: "#e4572e",
    rot: 4.1,
    pinnedAgo: "pinned 4 days ago",
  },
  {
    id: "f8",
    biz: "Night Owl Tutoring",
    text: "Math help for grown-ups. Fractions, taxes, mortgage APRs. No judgment, ever. Wednesdays, back booth here.",
    cat: "service",
    contact: "owl@night.fm",
    pin: "#ffb63d",
    rot: -4.4,
    pinnedAgo: "pinned 5 days ago",
  },
];

export const freeMenu: { name: string; desc: string }[] = [
  { name: "House Drip", desc: "Crowfoot Sunrise blend, bottomless pot" },
  { name: "Crowd Cold Brew", desc: "18-hour steep, on tap, dangerously smooth" },
  { name: "Espresso", desc: "double, always. pulled to order" },
  { name: "Cortado", desc: "the silk-ratio classic" },
  { name: "Mocha", desc: "with Old Mill 70% chocolate" },
  { name: "Refill №∞", desc: "the entire point of this establishment" },
];

export const paidMenu: { name: string; price: string; desc: string }[] = [
  { name: "Crowfoot Beans · 250g", price: "$14", desc: "the roast you're drinking, to go" },
  { name: "Drip Bag Trio", price: "$9", desc: "office-survival kit, single origins" },
  { name: "Marigold Croissant", price: "$4", desc: "laminated next door, 6AM" },
  { name: "Corn Loaf & Cultured Butter", price: "$5", desc: "warm, salty, gone by noon" },
  { name: "Ham & Gruyère Toastie", price: "$8", desc: "on yesterday's sourdough, obviously" },
  { name: "House Mug, speckled", price: "$16", desc: "thrown by Hollow Ceramics" },
];

export const weekEvents: { day: string; title: string; time: string; tag?: string }[] = [
  { day: "MON", title: "Open Mic — mugs provided, hecklers refilled", time: "7:00 PM" },
  { day: "TUE", title: "Roast Tasting — this week's Crowfoot single origins", time: "6:00 PM", tag: "FREE, DUH" },
  { day: "WED", title: "Flyer Print Night — bring your promo, we print 50", time: "5:00 PM", tag: "FOR THE WALL" },
  { day: "THU", title: "Chess & Refills — boards in the back, clock optional", time: "ALL DAY" },
  { day: "FRI", title: "First-Friday Wall Swap — new flyers go up at 6", time: "6:00 PM", tag: "WALL NIGHT" },
  { day: "SAT", title: "Neighborhood Swap Market — bring a thing, leave with a thing", time: "10 AM–2 PM" },
  { day: "SUN", title: "Slow Bar + paper zine library — quiet hours till noon", time: "9:00 AM" },
];

export const neighborQuotes: { text: string; who: string }[] = [
  {
    text: "The wall got me forty new customers in one week. The coffee got me a habit. Both were free to start.",
    who: "Rae · Marigold Bakery",
  },
  {
    text: "I moved here knowing nobody. Two refill rounds and a wall-swap later, I had a barber, a yoga class and a chess rival.",
    who: "Dominic · new-ish local",
  },
  {
    text: "They print your flyer on Wednesday, pin it on Friday, and by Monday your promo is just… part of the room.",
    who: "June · Old Mill Books",
  },
  {
    text: "My landlord asked how the shop gives coffee away. I said: ask the wall. The wall is paying rent.",
    who: "Priya · Salt Path Yoga",
  },
];

export const nowPouring: string[] = [
  "SUNRISE BLEND — DARK",
  "EL PARAISO — COLOMBIA",
  "NIGHT SHIFT — DECAF",
  "CINDER — ESPRESSO ROAST",
];

export const wallPricing: {
  name: string;
  price: string;
  per: string;
  includes: string[];
  hot?: boolean;
}[] = [
  {
    name: "THE CARD",
    price: "$9",
    per: "per week",
    includes: ["4×6 card, prime cork", "one steel pin, yours to keep", "photo posted to the weekly email"],
  },
  {
    name: "THE FLYER",
    price: "$19",
    per: "per week",
    includes: ["A5 flyer at eye level", "we print 50 copies free", "tear-off tabs, restocked daily"],
    hot: true,
  },
  {
    name: "THE SHELF",
    price: "$29",
    per: "per week",
    includes: ["30cm shelf by the door", "sell or stack, no commission", "chalk tag written by our best handwriting"],
  },
  {
    name: "THE SCREEN",
    price: "$39",
    per: "per week",
    includes: ["15s rotation on the pour board", "between every free-pour announcement", "motion allowed, sound politely not"],
  },
];
