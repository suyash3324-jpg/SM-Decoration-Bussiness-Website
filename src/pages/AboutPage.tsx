import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, ZoomIn } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import { useInView } from '../hooks/useInView';
import { categories, businessInfo } from '../data/galleryData';

export default function AboutPage() {
  const { ref: ref1, isInView: inView1 } = useInView();
  const { ref: ref2, isInView: inView2 } = useInView();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Pick high quality decoration photos from business work
  const aboutImages = [
    categories[5].images[3],
    categories[0].images[5],
    categories[7].images[1],
    categories[3].images[2],
  ];

  return (
    <section className="py-12 md:py-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="आमच्याबद्दल"
          subtitle="प्रत्येक सोहळा खास बनवण्याचा आमचा प्रयत्न!"
        />

        {/* About content */}
        <div
          ref={ref1}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 transition-all duration-700 ${
            inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4">
              SM Mandap Decoration
            </h3>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                SM Mandap Decoration ही रेठरे हरणाक्ष, ता. वाळवा, जि. सांगली, महाराष्ट्र
                येथील एक विश्वासार्ह मंडप व कार्यक्रम सजावट सेवा आहे.
              </p>
              <p>
                आम्ही लग्नसमारंभ, वाढदिवस, डोहाळे जेवण, नामकरण सोहळा, गणेशोत्सव, हळदी-मेहंदी,
                शिवजयंती आणि इतर विविध शुभप्रसंगांसाठी आकर्षक आणि नाविन्यपूर्ण सजावट करतो.
              </p>
              <p>
                प्रत्येक ग्राहकाच्या आवडीनुसार आणि कार्यक्रमाच्या स्वरूपानुसार खास सजावट
                तयार करणे हे आमचे वैशिष्ट्य आहे. आम्ही प्रत्येक सोहळा खास आणि अविस्मरणीय
                बनवण्यासाठी मेहनत करतो.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/our-work"
                className="inline-flex items-center justify-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                आमचे काम पहा
                <ArrowRight size={18} />
              </Link>
              <a
                href={businessInfo.getWhatsAppUrl(businessInfo.owners[0].phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp वर संपर्क करा
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4">
            {aboutImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  i === 0 ? 'row-span-2' : ''
                }`}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img}
                  alt={`सजावट ${i + 1}`}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'aspect-[3/5]' : 'aspect-square'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-maroon-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div
          ref={ref2}
          className={`transition-all duration-700 ${
            inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-charcoal text-center mb-8">
            आमचे व्यवस्थापक
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {businessInfo.owners.map((owner) => (
              <div
                key={owner.phone}
                className="text-center p-6 bg-white rounded-xl border border-gold/10 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-maroon to-maroon-dark rounded-full flex items-center justify-center shadow-md">
                  <span className="text-gold font-bold text-xl">
                    {owner.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-charcoal text-base mb-1">{owner.name}</h4>
                <p className="text-sm text-charcoal-light mb-4">
                  {owner.phone}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={businessInfo.getCallUrl(owner.phone)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-maroon hover:bg-maroon-dark text-white rounded-lg text-xs font-medium transition-colors"
                  >
                    <Phone size={13} />
                    <span>कॉल</span>
                  </a>
                  <a
                    href={businessInfo.getWhatsAppUrl(owner.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium transition-colors"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={aboutImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          categoryTitle="आमचे काम"
        />
      )}
    </section>
  );
}
