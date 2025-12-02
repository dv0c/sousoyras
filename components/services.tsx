import { Truck, Globe, Package, Clock } from "lucide-react"

const services = [
  {
    title: "Εθνικές Μεταφορές",
    description:
      "Αξιόπιστες και γρήγορες μεταφορές εντός Ελλάδας, με πλήρη παρακολούθηση του φορτίου.",
    icon: Truck,
  },

  {
    title: "Ειδικές Μεταφορές",
    description:
      "Αντιμετωπίζουμε με συνέπεια και ασφάλεια φορτία ειδικών διαστάσεων ή επείγουσες αποστολές.",
    icon: Package,
  },
  {
    title: "24/7 Υποστήριξη",
    description:
      "Το προσωπικό μας είναι διαθέσιμο οποιαδήποτε στιγμή για να διασφαλίσει την ομαλή παράδοση.",
    icon: Clock,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Οι Υπηρεσίες μας</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Στη <span className="font-semibold text-foreground">Sousouras Trans</span> 
          προσφέρουμε ολοκληρωμένες λύσεις μεταφοράς προσαρμοσμένες στις ανάγκες της 
          επιχείρησής σας, με ασφάλεια, ταχύτητα και αξιοπιστία.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted/10 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
