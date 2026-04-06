import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: '/real-1.jpg', caption: 'Семейни моменти с Животинки' },
    { src: '/real-2.jpg', caption: 'Пълен комплект от 50 животни' },
    { src: '/real-3.jpg', caption: 'Радост от играта' },
    { src: '/real-4.jpg', caption: 'Красив дизайн и цветове' },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="gallery" ref={sectionRef} className="py-8 lg:py-20 bg-[#FDFBF6]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-8">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#F6A377]/20 text-[#F6A377] px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
              Галерия
            </span>
            <h2 
              className="text-xl lg:text-4xl xl:text-5xl leading-tight font-bold text-[#0C6D3E]"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Визуално
              <span className="text-[#F6A377]"> Пътешествие</span>
            </h2>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="reveal opacity-0 relative mb-3 lg:mb-5">
          <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((img, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="relative aspect-[4/3]">
                    <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 lg:p-5">
                      <p className="text-white text-sm lg:text-lg font-semibold">{img.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={prevSlide} className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors">
              <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-[#0C6D3E]" />
            </button>
            <button onClick={nextSlide} className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors">
              <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-[#0C6D3E]" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 lg:h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#E4F22B] w-4 lg:w-6' : 'bg-[#0C6D3E]/30 w-1.5 lg:w-2'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="reveal opacity-0 grid grid-cols-4 gap-1.5 lg:gap-3">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative aspect-[4/3] rounded-lg lg:rounded-xl overflow-hidden transition-all ${i === currentIndex ? 'ring-2 lg:ring-4 ring-[#E4F22B]' : 'opacity-60'}`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
