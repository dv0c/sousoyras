import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Logo from "../public/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={Logo}
              alt="Sousouras Trans Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Η <span className="font-semibold text-white"> Sousouras Trans </span> 
            προσφέρει αξιόπιστες και ολοκληρωμένες υπηρεσίες μεταφοράς σε όλη την Ελλάδα
            και το εξωτερικό. Με εμπειρία, συνέπεια και ασφάλεια, μεταφέρουμε το φορτίο σας 
            εκεί που πρέπει – <span className="text-white font-semibold">Απλά και Σίγουρα</span>.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Επικοινωνία</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+30 210 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@sousourastrans.gr</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Αθήνα, Ελλάδα</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Γρήγορη Πρόσβαση</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Αρχική</a></li>
            <li><a href="#about" className="hover:text-white transition">Σχετικά</a></li>
            <li><a href="#services" className="hover:text-white transition">Υπηρεσίες</a></li>
            <li><a href="#contact" className="hover:text-white transition">Επικοινωνία</a></li>
            <li><a href="/terms" className="hover:text-white transition">Όροι Χρήσης</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between px-6 text-sm text-gray-500">
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} Sousouras Trans. Όλα τα δικαιώματα διατηρούνται. Powered by <a className="hover:underline" href="https://meindesk.gr/" target="_blank">Meindesk.</a>
        </p>
        <a
          href="/terms"
          className="hover:text-white transition text-gray-400"
        >
          Όροι Χρήσης & Πολιτική Απορρήτου
        </a>
      </div>
    </footer>
  )
}

export default Footer
