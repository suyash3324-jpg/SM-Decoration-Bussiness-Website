import { useState } from 'react';
import { MessageCircle, X, Phone, UserCheck } from 'lucide-react';
import { businessInfo } from '../data/galleryData';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover dialog */}
      {isOpen && (
        <div
          className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gold/20 overflow-hidden animate-fade-in-up"
          style={{ animationDuration: '0.25s' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-maroon to-maroon-dark p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">SM Mandap Decoration</h4>
                <p className="text-[11px] text-gold-light">WhatsApp वर त्वरित संपर्क साधा</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="बंद करा"
            >
              <X size={18} />
            </button>
          </div>

          {/* Owner List */}
          <div className="p-3 space-y-2 bg-ivory/60">
            <p className="text-xs text-charcoal-light px-1 font-medium">
              खालीलपैकी कोणत्याही क्रमांकावर संपर्क करा:
            </p>
            {businessInfo.owners.map((owner) => (
              <div
                key={owner.phone}
                className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between shadow-xs hover:border-gold/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-maroon/10 text-maroon flex items-center justify-center text-xs font-bold">
                    <UserCheck size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal">{owner.name}</div>
                    <div className="text-[11px] text-charcoal-light">{owner.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={businessInfo.getCallUrl(owner.phone)}
                    className="p-2 bg-gray-100 hover:bg-maroon hover:text-white text-charcoal rounded-lg transition-colors"
                    title={`${owner.name} यांना कॉल करा`}
                    aria-label={`Call ${owner.name}`}
                  >
                    <Phone size={14} />
                  </a>
                  <a
                    href={businessInfo.getWhatsAppUrl(owner.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium transition-colors"
                    title={`${owner.name} यांना WhatsApp करा`}
                  >
                    <MessageCircle size={14} />
                    <span>चॅट</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-2.5 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-[11px] text-charcoal-light">
              वेळ: सकाळी ८:०० ते रात्री १०:००
            </p>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group relative cursor-pointer"
        aria-label="WhatsApp संपर्क मेनू उघडा"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <>
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none" />
          </>
        )}
      </button>
    </div>
  );
}
