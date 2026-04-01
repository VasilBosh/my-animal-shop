import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
    {
      src: '/gallery-1.jpg',
      alt: 'Дете показва сглобен слон',
      caption: 'Гордост от постижението'
    },
    {
      src: '/gallery-2.jpg',
      alt: 'Детайл на картонена костенурка',
      caption: 'Качествени детайли'
    },
    {
      src: '/gallery-3.jpg',
      alt: 'Майка и дете играят заедно',
      caption: 'Семейни моменти'
    },
    {
      src: '/gallery-4.jpg',
      alt: 'Колекция от животни',
      caption: 'Пълен комплект'
    },
    {
      src: '/hero-child.jpg',
      alt: 'Дете играе с жираф',
      caption: 'Чисто забавление'
    },
    {
      src: '/animal-lion.jpg',
      alt: 'Картонен лъв',
      caption: 'Красив дизайн'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-[#FDFBF6] relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#F6A377]/20 text-[#F6A377] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Галерия
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C6D3E] leading-tight mb-6"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Визуално
              <span className="text-[#F6A377]"> Пътешествие</span>
            </h2>
            <p className="text-lg text-[#0C6D3E]/80">
              Вижте как Животинки носят радост в домовете на семействата
            </p>
          </div>
        </div>
        
        {/* Main Carousel */}
        <div className="reveal opacity-0 relative mb-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative aspect-video">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white text-lg font-semibold">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#0C6D3E]" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#0C6D3E]" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#E4F22B] w-8' : 'bg-[#0C6D3E]/30'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="reveal opacity-0 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex ? 'ring-4 ring-[#E4F22B] scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
