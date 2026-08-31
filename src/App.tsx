import { Footer, Header } from "./components/Chrome";
import { Opening } from "./components/Opening";
import { Wall } from "./components/Wall";
import { Events, Menu, Pass, Visit, WhyFree } from "./components/Sections";
import { useLiveCounter } from "./lib";

export default function App() {
  const cups = useLiveCounter(1287, 2600);

  return (
    <div className="min-h-screen bg-roast font-body antialiased">
      <div className="noise-overlay" aria-hidden="true" />
      <Header cups={cups} />
      <main>
        <Opening cups={cups} />
        <WhyFree />
        <Wall />
        <Menu />
        <Pass />
        <Events />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
