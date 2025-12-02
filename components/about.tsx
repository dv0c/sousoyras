import Image from "next/image"
import AboutImage from "../public/about.jpg"

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={AboutImage}
            alt="Sousouras Trans fleet"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Εμπιστοσύνη στην Κίνηση
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Η <span className="font-semibold text-foreground"> Sousouras Trans </span> 
            εξειδικεύεται στις εθνικές και διεθνείς μεταφορές, παρέχοντας ολοκληρωμένες
            λύσεις για επιχειρήσεις κάθε μεγέθους. Με έμφαση στην ακρίβεια, την ασφάλεια 
            και τη συνέπεια, φροντίζουμε κάθε αποστολή σαν να ήταν δική μας.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Ο στόλος μας είναι σύγχρονος, πλήρως εξοπλισμένος και τηρεί όλα τα 
            ευρωπαϊκά πρότυπα ασφαλείας. Ο συνδυασμός τεχνολογίας και εμπειρίας μάς 
            επιτρέπει να ανταποκρινόμαστε στις ανάγκες της αγοράς με ευελιξία και ταχύτητα.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Από απλές εμπορευματικές μεταφορές έως ειδικές αποστολές, 
            είμαστε ο αξιόπιστος συνεργάτης που μπορείτε να εμπιστευτείτε 
            για να φτάσει το φορτίο σας εκεί που πρέπει — 
            <span className="font-semibold text-foreground">Απλά και Σίγουρα</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
