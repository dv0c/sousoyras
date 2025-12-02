import Image from "next/image"
import HeroImage from "../../public/hero.jpg"

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      {/* Background image */}
      <Image
        alt="hero"
        src={HeroImage}
        placeholder="blur"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Απλά και Σίγουρα
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Στη <span className="font-semibold text-white">Sousouras Trans</span>{" "}
          συνδυάζουμε εμπειρία, αξιοπιστία και άριστη εξυπηρέτηση, προσφέροντας
          ολοκληρωμένες λύσεις μεταφοράς που ανταποκρίνονται στις ανάγκες της
          σύγχρονης αγοράς. Κάθε φορτίο φτάνει γρήγορα και με απόλυτη προσοχή
          στον προορισμό του.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-primary px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Επικοινωνήστε μαζί μας
          </a>
        </div>
      </div>

      {/* Fade mask at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
