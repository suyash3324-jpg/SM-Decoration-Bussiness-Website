import { useState, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getCategoryBySlug, businessInfo } from '../data/galleryData';
import Lightbox from '../components/Lightbox';
import { useInView } from '../hooks/useInView';

export default function CategoryGalleryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.05);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  if (!category) {
    return <Navigate to="/our-work" replace />;
  }

  return (
    <section className="py-8 md:py-16 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/our-work"
          className="inline-flex items-center gap-2 text-maroon hover:text-maroon-dark font-medium mb-6 md:mb-10 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          सर्व कामांकडे परत जा
        </Link>

        {/* Category heading */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
            {category.name}
          </h1>
          <div className="ornamental-divider mb-3">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="text-charcoal-light text-base md:text-lg">
            {category.description}
          </p>
          <p className="text-sm text-charcoal-light/60 mt-2">
            एकूण {category.images.length} फोटो
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={ref} className="masonry-grid">
          {category.images.map((img, i) => (
            <div
              key={i}
              className={`masonry-item transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${Math.min(i * 50, 500)}ms` }}
            >
              <button
                onClick={() => openLightbox(i)}
                className="group w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer block"
              >
                <img
                  src={img}
                  alt={`${category.name} - फोटो ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Enquiry CTA & Back button */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl shadow-md border border-gold/20 text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
            तुम्हाला ही {category.name} आवडली का?
          </h3>
          <p className="text-sm text-charcoal-light mb-6">
            तुमच्या कार्यक्रमासाठी या प्रकारच्या सजावटीचे बुकिंग व दराबाबत WhatsApp वर थेट चर्चा करा.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={businessInfo.getWhatsAppUrl(
                businessInfo.primaryWhatsApp,
                `नमस्कार! मला SM Mandap Decoration च्या "${category.name}" बद्दल अधिक माहिती आणि दर जाणून घ्यायचे आहेत.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              या सजावटीबद्दल WhatsApp करा
            </a>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={16} />
              सर्व कामांकडे परत जा
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={category.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          categoryTitle={category.name}
        />
      )}
    </section>
  );
}
