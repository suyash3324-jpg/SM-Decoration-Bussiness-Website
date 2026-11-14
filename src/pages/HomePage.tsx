import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, Palette, Users, Heart, ZoomIn } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import { useInView } from '../hooks/useInView';
import { categories, businessInfo } from '../data/galleryData';

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={categories[5].images[0]}
          alt="SM Mandap Decoration सजावट"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon-dark/70 to-maroon-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold-light px-4 py-1.5 rounded-full text-sm mb-6 animate-fade-in-up">
            <Sparkles size={14} />
            <span>मंडप व कार्यक्रम सजावट</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
            तुमच्या प्रत्येक शुभक्षणाला सजवूया{' '}
            <span className="text-gold">अविस्मरणीय!</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
            लग्नसमारंभ, वाढदिवस, डोहाळे जेवण आणि प्रत्येक खास प्रसंगासाठी आकर्षक सजावट.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Link
              to="/our-work"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-maroon-dark px-6 py-3 rounded-lg font-semibold text-base transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              आमचे काम पहा
              <ArrowRight size={18} />
            </Link>
            <a
              href={businessInfo.getWhatsAppUrl(businessInfo.owners[0].phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all hover:shadow-lg hover:shadow-green-600/20"
            >
              <MessageCircle size={18} />
              WhatsApp वर संपर्क करा
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}

/* ─── Services Section ─── */
const services = [
  {
    title: 'लग्नसमारंभ सजावट',
    desc: 'मंडप, स्टेज, प्रवेशद्वार आणि संपूर्ण लग्नसमारंभासाठी भव्य सजावट.',
    image: categories[5].images[2],
  },
  {
    title: 'वाढदिवस सजावट',
    desc: 'वाढदिवसासाठी थीम-आधारित रंगीबेरंगी आणि आनंददायी सजावट.',
    image: categories[6].images[0],
  },
  {
    title: 'डोहाळे जेवण सजावट',
    desc: 'डोहाळे जेवण समारंभासाठी पारंपरिक आणि सुंदर सजावट.',
    image: categories[1].images[0],
  },
  {
    title: 'गणेशोत्सव सजावट',
    desc: 'गणपती बाप्पाच्या आगमनासाठी आकर्षक आणि भव्य मखर सजावट.',
    image: categories[0].images[0],
  },
  {
    title: 'हळदी-मेहंदी सजावट',
    desc: 'हळदी आणि मेहंदी समारंभासाठी पारंपरिक सजावट.',
    image: categories[7].images[0],
  },
  {
    title: 'नामकरण सोहळा',
    desc: 'बारशासाठी आनंददायी आणि सुंदर सजावट.',
    image: categories[2].images[0],
  },
];

function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="आमच्या सजावट सेवा"
          subtitle="प्रत्येक शुभप्रसंगासाठी विशेष आणि आकर्षक सजावट"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
const reasons = [
  {
    icon: <Sparkles className="text-gold" size={28} />,
    title: 'आकर्षक आणि नाविन्यपूर्ण सजावट',
    desc: 'प्रत्येक सजावटीमध्ये नवीनतम ट्रेंड आणि सर्जनशील कल्पनांचा वापर.',
  },
  {
    icon: <Palette className="text-gold" size={28} />,
    title: 'प्रत्येक कार्यक्रमासाठी खास संकल्पना',
    desc: 'तुमच्या कार्यक्रमाच्या स्वरूपानुसार विशेष थीम आणि सजावट.',
  },
  {
    icon: <Users className="text-gold" size={28} />,
    title: 'ग्राहकांच्या आवडीनुसार सजावट',
    desc: 'तुमच्या कल्पना आणि आवडीनुसार सजावटीचे नियोजन.',
  },
  {
    icon: <Heart className="text-gold" size={28} />,
    title: 'विविध शुभकार्यांसाठी सजावटीच्या सेवा',
    desc: 'लग्न, वाढदिवस, बारसे, गणेशोत्सव आणि इतर सर्व प्रसंगांसाठी.',
  },
];

function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="आमची वैशिष्ट्ये"
          subtitle="SM Mandap Decoration ची सजावट का निवडावी?"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`text-center p-6 md:p-8 rounded-xl border border-gold/10 hover:border-gold/30 bg-ivory/50 hover:bg-ivory transition-all duration-500 hover:shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-maroon/10 rounded-xl flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-charcoal mb-2">{reason.title}</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Work ─── */
function FeaturedWork() {
  const { ref, isInView } = useInView();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Pick diverse high quality images from multiple categories
  const featured = [
    categories[5].images[1],
    categories[0].images[3],
    categories[7].images[2],
    categories[2].images[1],
    categories[6].images[2],
    categories[3].images[0],
    categories[1].images[1],
    categories[4].images[0],
  ];

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="आमच्या कामाची झलक"
          subtitle="आमच्या काही निवडक सजावटींचे दर्शन (फोटो मोठा पाहण्यासाठी क्लिक करा)"
        />

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {featured.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                i === 0 || i === 5 ? 'md:row-span-2' : ''
              } ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightboxIndex(i)}
            >
              <div className={`overflow-hidden ${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={img}
                  alt={`सजावट ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-maroon-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gold/90 text-maroon flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:shadow-lg hover:shadow-maroon/20"
          >
            सर्व सजावट पहा
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Lightbox for featured work */}
      {lightboxIndex !== null && (
        <Lightbox
          images={featured}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          categoryTitle="निवडक सजावट"
        />
      )}
    </section>
  );
}

/* ─── Contact CTA ─── */
function ContactCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={categories[5].images[5]}
          alt="सजावट"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon-dark/85" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto text-center px-4 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          तुमच्या कार्यक्रमाची तयारी सुरू करूया!
        </h2>
        <p className="text-base md:text-lg text-white/75 mb-8 leading-relaxed">
          तुमच्या खास प्रसंगासाठी सजावटीची चर्चा करण्यासाठी आजच आमच्याशी संपर्क साधा.
        </p>
        <a
          href={businessInfo.getWhatsAppUrl(businessInfo.owners[0].phone)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-600/30 hover:scale-105"
        >
          <MessageCircle size={24} />
          आजच WhatsApp करा
        </a>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedWork />
      <ContactCTA />
    </>
  );
}
