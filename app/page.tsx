import About from "@/components/about";
import Hero from "./components/Hero";
import Contact from "@/components/contact";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
