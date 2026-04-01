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
    {
      name: 'Мария Иванова',
      location: 'София',
      rating: 5,
      text: 'Дъщеря ми обожава тези животни! Сглобява ги отново и отново. Вече имаме цяла колекция в стаята ѝ. Препоръчвам на всеки родител!',
      avatar: 'МИ'
    },
    {
      name: 'Иван Петров',
      location: 'Пловдив',
      rating: 5,
      text: 'Най-накрая игра, която я откъсва от таблета! Синът ми прекарва часове в сглобяване на животните и създаване на истории с тях.',
      avatar: 'ИП'
    },
    {
      name: 'Петя Димитрова',
      location: 'Варна',
      rating: 5,
      text: 'Перфектен подарък за рожден ден. Всички деца на партито се възхищаваха! Качеството е отлично, а дизайнът - много красив.',
      avatar: 'ПД'
    },
    {
      name: 'Георги Николов',
      location: 'Бургас',
      rating: 5,
      text: 'Купих за племенницата си и тя е във възторг! Много харесвам, че е екологична и развива моториката. Ще поръчам още!',
      avatar: 'ГН'
    },
    {
      name: 'Станка Йорданова',
      location: 'Русе',
      rating: 5,
      text: 'Внукът ми на 4 години се справя перфектно със сглобяването. Инструкциите са ясни, а животните са толкова сладки!',
      avatar: 'СЙ'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useState(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section ref={sectionRef} className="section-padding bg-[#0C6D3E] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E4F22B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F6A377]/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal opacity-0">
            <span className="inline-block bg-[#E4F22B]/20 text-[#E4F22B] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Отзиви
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Какво Казват
              <span className="text-[#E4F22B]"> Родителите</span>
            </h2>
            <p className="text-lg text-white/80">
              Вижте мнението на семейства, които вече се радват на Животинки
            </p>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="reveal opacity-0 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                    <Quote className="w-12 h-12 text-[#E4F22B] mb-6" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#E4F22B] fill-[#E4F22B]" />
                      ))}
                    </div>
                    
                    {/* Text */}
                    <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#E4F22B] rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-[#0C6D3E]">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-white/60">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#E4F22B] w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
