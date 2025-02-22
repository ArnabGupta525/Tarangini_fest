import { Menu, X } from 'lucide-react';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/schedule", label: "Schedule" },
    { href: "/registration", label: "Register" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#B5EAD7] font-['Playfair_Display']">
            FEST 2024
          </div>
          
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#B5EAD7] transition-colors duration-300 font-['Montserrat']"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#B5EAD7] transition-colors duration-300 font-['Montserrat']"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
