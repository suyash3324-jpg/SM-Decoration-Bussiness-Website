import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { businessInfo } from '../data/galleryData';

const navLinks = [
  { to: '/', label: 'मुख्यपृष्ठ' },
  { to: '/our-work', label: 'आमचे काम' },
  { to: '/about', label: 'आमच्याबद्दल' },
  { to: '/contact', label: 'संपर्क' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-gold font-bold text-lg md:text-xl" style={{ fontFamily: 'serif' }}>SM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-maroon leading-tight">SM Mandap Decoration</h1>
              <p className="text-[10px] md:text-xs text-charcoal-light leading-tight">मंडप व कार्यक्रम सजावट</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-maroon/10 text-maroon'
                    : 'text-charcoal hover:text-maroon hover:bg-maroon/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={businessInfo.getWhatsAppUrl(businessInfo.owners[0].phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={businessInfo.getWhatsAppUrl(businessInfo.owners[0].phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-600 text-white rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal hover:text-maroon transition-colors cursor-pointer"
              aria-label={isOpen ? 'मेनू बंद करा' : 'मेनू उघडा'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-gray-100 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-maroon bg-maroon/10 font-bold'
                      : 'text-charcoal hover:text-maroon hover:bg-maroon/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-3 border-t border-gray-100 px-4 space-y-2">
              <a
                href={businessInfo.getWhatsAppUrl(businessInfo.owners[0].phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-semibold shadow-xs"
              >
                <MessageCircle size={18} />
                WhatsApp वर संपर्क करा
              </a>
              <a
                href={businessInfo.getCallUrl(businessInfo.owners[0].phone)}
                className="flex items-center justify-center gap-2 w-full bg-maroon text-white py-2.5 rounded-lg text-sm font-semibold shadow-xs"
              >
                <Phone size={16} />
                कॉल करा ({businessInfo.owners[0].phone})
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
