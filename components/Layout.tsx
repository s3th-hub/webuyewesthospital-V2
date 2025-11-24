import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Phone, Heart, MapPin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Specialist Clinics', path: '/clinics' },
    { name: 'Service Charter', path: '/charter' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contacts', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative">
              {/* Ensure logo.png is in the public folder */}
              <img 
                src="/logo.png" 
                alt="Webuye West Hospital Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('fallback-icon');
                }}
              />
              {/* Fallback Icon */}
              <div className="hidden fallback-icon:block bg-hospital-blue text-white p-2 rounded-lg">
                <Heart className="h-8 w-8 fill-current" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl text-hospital-blue leading-tight tracking-tight transition-colors">
                WEBUYE WEST
              </span>
              <span className="text-xs md:text-sm font-medium text-hospital-lightBlue tracking-widest">
                HOSPITAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-hospital-blue text-white'
                      : 'text-gray-600 hover:text-hospital-blue hover:bg-blue-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-hospital-blue text-white'
                      : 'text-gray-600 hover:text-hospital-blue hover:bg-blue-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-hospital-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               {/* Footer Logo */}
               <div className="bg-white p-1 rounded-md inline-block">
                 <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="h-10 w-auto"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      e.currentTarget.parentElement?.classList.remove('bg-white', 'p-1');
                    }} 
                 />
                 <Heart className="h-6 w-6 fill-white hidden" />
               </div>
               <h3 className="text-xl font-bold">Webuye West Hospital</h3>
            </div>
            <p className="text-blue-100 mb-4 text-sm leading-relaxed">
              Healing Hands, Caring Hearts. Committed to offering highest standards of medical services supported by modern equipment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><NavLink to="/services" className="hover:text-white hover:underline">Our Services</NavLink></li>
              <li><NavLink to="/clinics" className="hover:text-white hover:underline">Specialist Clinics</NavLink></li>
              <li><NavLink to="/charter" className="hover:text-white hover:underline">Service Charter</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-white hover:underline">Careers</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Webuye, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@webuyewesthospital.go.ke</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Webuye West Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;