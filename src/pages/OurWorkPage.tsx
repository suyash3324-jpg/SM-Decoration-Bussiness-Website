import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { categories } from '../data/galleryData';

export default function OurWorkPage() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-12 md:py-20 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="आमचे काम"
          subtitle="आमच्या विविध सजावटींचे संग्रह पहा. प्रत्येक प्रसंगासाठी खास सजावट."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category, i) => (
            <Link
              key={category.id}
              to={`/gallery/${category.slug}`}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Cover image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.images[0]}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/30 to-transparent group-hover:from-maroon-dark/95 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">
                    {category.images.length} फोटो
                  </span>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    पहा <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-3 right-3 bg-gold/90 text-maroon-dark text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                गॅलरी पहा →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
