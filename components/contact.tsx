import { Clock, MapPin, Phone } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="relative  py-20 bg-background text-foreground">
      <div className="container mx-auto  px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Επικοινωνήστε μαζί μας
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Στη <span className="font-semibold text-foreground"> Sousouras Trans </span> 
          είμαστε πάντα διαθέσιμοι να εξυπηρετήσουμε κάθε ανάγκη μεταφοράς. 
          Επικοινωνήστε μαζί μας για πληροφορίες, συνεργασίες ή προσφορές.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl mb-1">Τηλέφωνο</h3>
            <p className="text-muted-foreground">+30 6978 534210</p>
          </div>

          {/* <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl mb-1">Email</h3>
            <p className="text-muted-foreground">info@sousourastrans.gr</p>
          </div> */}

          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl mb-1">Διεύθυνση</h3>
            <p className="text-muted-foreground">Σαβάλια Ηλείας, Ελλάδα</p>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl mb-1">Ώρες Λειτουργίας</h3>
            <p className="text-muted-foreground">Δευ – Παρ: 08:00 – 18:00</p>
          </div>
        </div>

        {/* Optional Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50352.04464734421!2d21.311933657519518!3d37.93036525922106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1360a606aaaaaaab%3A0xbb56922fa04fb665!2zzqPPhM-BzrHPhM65z4nPhM65zrrPjCDOkc61z4HOv860z4HPjM68zrnOvyDOkc69zrTPgc6xzrLOr860zrHPgg!5e0!3m2!1sel!2sgr!4v1764695892322!5m2!1sel!2sgr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Subtle fade effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

export default Contact
