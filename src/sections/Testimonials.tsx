import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
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

  const testimonials = [
    { name: 'Мария Иванова', loc: 'София', text: 'Дъщеря ми обожава тези животни! Сглобява ги отново и отново. Препоръчвам на всеки родител!', avatar: 'МИ' },
    { name: 'Иван Петров', loc: 'Пловдив', text: 'Най-накрая игра, която я откъсва от таблета! Синът ми прекарва часове в сглобяване.', avatar: 'ИП' },
    { name: 'Петя Димитрова', loc: 'Варна', text: 'Перфектен подарък за рожден ден! Качеството е отлично, а дизайнът - много красив.', avatar: 'ПД' },
    { name: 'Георги Николов', loc: 'Бургас', text: 'Купих за племенницата си и тя е във възторг! Ще поръчам още!', avatar: 'ГН' },
    { name: 'Станка Йорданова', loc: 'Русе', text: 'Внукът ми на 4 години се справя перфектно. Животните са толкова сладки!', avatar: 'СЙ' },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-8 lg:py-20 bg-[#0C6D3E]">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-8">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#E4F22B]/20 text-[#E4F22B] px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
              Отзиви
            </span>
            <h2 
              className="text-xl lg:text-4xl xl:text-5xl leading-tight font-bold text-white"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Какво Казват
              <span className="text-[#E4F22B]"> Родителите</span>
            </h2>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="reveal opacity-0 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-0.5 lg:px-2">
                  <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 lg:p-8">
                    <Quote className="w-6 h-6 lg:w-10 lg:h-10 text-[#E4F22B] mb-3 lg:mb-4" />
                    <div className="flex gap-0.5 lg:gap-1 mb-3 lg:mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-[#E4F22B] fill-[#E4F22B]" />
                      ))}
                    </div>
                    <p className="text-sm lg:text-xl text-white mb-4 lg:mb-6 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-9 h-9 lg:w-12 lg:h-12 bg-[#E4F22B] rounded-full flex items-center justify-center">
                        <span className="text-xs lg:text-sm font-bold text-[#0C6D3E]">{t.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm lg:text-base">{t.name}</p>
                        <p className="text-white/60 text-xs lg:text-sm">{t.loc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-2 lg:gap-3 mt-4 lg:mt-6">
            <button onClick={prevSlide} className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 lg:h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#E4F22B] w-4 lg:w-5' : 'bg-white/30 w-1.5 lg:w-2'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
