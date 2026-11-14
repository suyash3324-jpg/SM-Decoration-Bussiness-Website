import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { businessInfo } from '../data/galleryData';

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white/90">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-maroon-dark font-bold text-xl" style={{ fontFamily: 'serif' }}>SM</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">SM Mandap Decoration</h3>
                <p className="text-xs text-gold-light">मंडप व कार्यक्रम सजावट</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mt-3">
              तुमच्या प्रत्येक शुभप्रसंगाला अविस्मरणीय बनवणारी विश्वासार्ह सजावट सेवा.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gold mb-4">पटकन पोहोचा</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-gold transition-colors">
                  मुख्यपृष्ठ
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-sm text-white/70 hover:text-gold transition-colors">
                  आमचे काम
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-gold transition-colors">
                  आमच्याबद्दल
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-gold transition-colors">
                  संपर्क
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-gold mb-4">संपर्क माहिती</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <p className="text-sm text-white/70">{businessInfo.address}</p>
              </div>
              {businessInfo.owners.map((owner) => (
                <div key={owner.phone} className="flex items-center gap-2">
                  <Phone size={14} className="text-gold shrink-0" />
                  <a href={businessInfo.getCallUrl(owner.phone)} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {owner.name}: {owner.phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <InstagramIcon size={14} className="text-gold shrink-0" />
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  @sm_mandap_decoration_
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} SM Mandap Decoration. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
}
