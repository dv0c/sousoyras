import About from "@/components/about";
import Hero from "../components/Hero";
import Contact from "@/components/contact";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
      <div className="fixed bottom-2 left-2 z-50 bg-black/70 text-white text-xs px-3 py-1 rounded-lg backdrop-blur-sm pointer-events-none select-none">
        © 2025 Sousouras Trans – Σχεδιασμένο από Meindesk. Χρησιμοποιείται προσωρινά χωρίς αδειοδότηση.
      </div>
    </main>
  );
}
