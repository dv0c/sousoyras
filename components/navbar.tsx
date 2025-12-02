
import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"

const Navbar = () => {
  return (
    <nav
      className={`fixed w-full z-20 bg-black/70 shadow-md top-0 transition-all duration-300 backdrop-blur-md`}
    >
      <div className="container justify-center mx-auto px-6 py-4 flex items-center md:justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Sousouras Trans Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/" className="hover:text-primary transition">
              Αρχική
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-primary transition">
              Σχετικά
            </Link>
          </li>
          <li>
            <Link href="/#services" className="hover:text-primary transition">
              Υπηρεσίες
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-primary transition">
              Επικοινωνία
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-primary transition">
              Όροι Χρήσης
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle (optional) */}
        {/* You can implement a drawer or dropdown for mobile later */}
      </div>
    </nav>
  )
}

export default Navbar
