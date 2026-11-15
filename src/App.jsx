import { useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SignalBar } from "./components/SignalBar";
import { Toolkit } from "./components/Toolkit";
import { Work } from "./components/Work";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-paper text-ink">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <SignalBar />
        <Work />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
