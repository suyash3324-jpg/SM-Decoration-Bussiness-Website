import { useInView } from '../hooks/useInView';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
        {title}
      </h2>
      <div className="ornamental-divider mb-3">
        <span className="text-gold text-xl">✦</span>
      </div>
      {subtitle && (
        <p className="text-charcoal-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
