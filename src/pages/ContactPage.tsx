import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { businessInfo } from '../data/galleryData';

export default function ContactPage() {
  const { ref: ref1, isInView: inView1 } = useInView();
  const { ref: ref2, isInView: inView2 } = useInView();

  return (
    <section className="py-12 md:py-20 bg-ivory min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="आमच्याशी संपर्क साधा"
          subtitle="तुमच्या कार्यक्रमासाठी सजावटीची चर्चा करण्यासाठी आजच आमच्याशी बोला."
        />

        {/* Contact Cards */}
        <div
          ref={ref1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16"
        >
          {businessInfo.owners.map((owner, i) => (
            <div
              key={owner.phone}
              className={`bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl border border-gold/10 transition-all duration-500 ${
                inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Owner avatar */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-maroon to-maroon-dark rounded-full flex items-center justify-center shadow-md">
                <span className="text-gold font-bold text-xl">{owner.name.charAt(0)}</span>
              </div>

              <h3 className="text-lg font-bold text-charcoal text-center mb-1">
                {owner.name}
              </h3>
              <p className="text-sm text-charcoal-light text-center mb-5">
                {owner.phone}
              </p>

              <div className="space-y-3">
                <a
                  href={businessInfo.getCallUrl(owner.phone)}
                  className="flex items-center justify-center gap-2 w-full bg-maroon hover:bg-maroon-dark text-white py-3 rounded-lg font-medium transition-all hover:shadow-md text-sm"
                >
                  <Phone size={16} />
                  कॉल करा
                </a>
                {owner.whatsapp && (
                  <a
                    href={businessInfo.getWhatsAppUrl(owner.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all hover:shadow-md text-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp वर संपर्क करा
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Business Info */}
        <div
          ref={ref2}
          className={`bg-white rounded-xl p-6 md:p-10 shadow-md border border-gold/10 transition-all duration-700 ${
            inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
            व्यवसाय माहिती
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Address */}
            <div className="flex items-start gap-3 p-4 bg-ivory rounded-lg">
              <div className="w-10 h-10 bg-maroon/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-maroon" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal text-sm mb-1">पत्ता</h4>
                <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                  {businessInfo.address}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-maroon hover:text-maroon-dark font-medium underline underline-offset-2"
                >
                  <span>गुगल मॅप्सवर पहा</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-3 p-4 bg-ivory rounded-lg">
              <div className="w-10 h-10 bg-maroon/10 rounded-lg flex items-center justify-center shrink-0">
                <InstagramIcon size={20} className="text-maroon" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal text-sm mb-1">Instagram</h4>
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-maroon hover:text-maroon-dark transition-colors"
                >
                  @sm_mandap_decoration_
                </a>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="flex items-start gap-3 p-4 bg-ivory rounded-lg sm:col-span-2">
              <div className="w-10 h-10 bg-maroon/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone size={20} className="text-maroon" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal text-sm mb-2">संपर्क क्रमांक</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {businessInfo.owners.map((owner) => (
                    <a
                      key={owner.phone}
                      href={businessInfo.getCallUrl(owner.phone)}
                      className="text-sm text-charcoal-light hover:text-maroon transition-colors"
                    >
                      {owner.name}: <span className="font-medium">{owner.phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
