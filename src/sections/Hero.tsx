import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen bg-[#FDFBF6] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-4 w-24 h-24 lg:w-48 lg:h-48 bg-[#E4F22B] rounded-full opacity-20 blur-2xl" />
      <div className="absolute bottom-20 right-4 w-32 h-32 lg:w-56 lg:h-56 bg-[#F6A377] rounded-full opacity-20 blur-2xl" />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-3 lg:py-6 px-3 lg:px-8">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#E4F22B] rounded-full flex items-center justify-center">
              <span className="text-base lg:text-xl">🦁</span>
            </div>
            <span className="text-base lg:text-2xl font-bold text-[#0C6D3E]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Животинки
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#product" className="text-sm lg:text-base text-[#0C6D3E] hover:text-[#095a32]">За продукта</a>
            <a href="#benefits" className="text-sm lg:text-base text-[#0C6D3E] hover:text-[#095a32]">Предимства</a>
            <a href="#gallery" className="text-sm lg:text-base text-[#0C6D3E] hover:text-[#095a32]">Галерия</a>
            <a href="#order" className="text-sm lg:text-base text-[#0C6D3E] hover:text-[#095a32]">Поръчай</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-3 lg:px-8 pt-16 lg:pt-24">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
              <div className="reveal opacity-0">
                <div className="inline-flex items-center gap-1.5 lg:gap-2 bg-[#E4F22B]/20 px-2.5 lg:px-4 py-1 lg:py-1.5 rounded-full mb-3 lg:mb-4">
                  <span className="text-sm lg:text-lg">🦒</span>
                  <span className="text-xs lg:text-sm font-medium text-[#0C6D3E]">50 уникални животни за сглобяване</span>
                </div>
                <h1 
                  className="text-[1.6rem] lg:text-5xl xl:text-6xl leading-tight font-bold text-[#0C6D3E]"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  Създай Своя
                  <span className="block text-[#F6A377]">Собствен Зоопарк!</span>
                </h1>
              </div>
              
              <p className="reveal opacity-0 text-sm lg:text-xl text-[#0C6D3E]/80 max-w-lg stagger-1">
                50 очарователни картонени животни за сглобяване. Идеално за малки ръце и големи въображения! Развийте фината моторика и креативността на вашето дете.
              </p>
              
              <div className="reveal opacity-0 flex flex-wrap gap-2 lg:gap-4 stagger-2">
                <Button onClick={scrollToProduct} className="btn-primary flex items-center gap-1.5 lg:gap-2 text-sm lg:text-base">
                  Разгледай Комплекта
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </Button>
                <a href="#order" className="px-4 lg:px-8 py-2 lg:py-3 rounded-full border-2 border-[#0C6D3E] text-[#0C6D3E] font-semibold text-sm lg:text-base hover:bg-[#0C6D3E] hover:text-white transition-all">
                  Поръчай Сега
                </a>
              </div>
              
              <div className="reveal opacity-0 flex items-center gap-2 lg:gap-3 stagger-3">
                <div className="flex -space-x-2 lg:-space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#E4F22B] to-[#F6A377] border-2 border-white flex items-center justify-center text-[10px] lg:text-xs font-bold">
                      {i===4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-[#0C6D3E] text-sm lg:text-base">1000+ доволни семейства</p>
                  <p className="text-xs lg:text-sm text-[#0C6D3E]/60">в България</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="reveal opacity-0 relative stagger-1 order-1 lg:order-2">
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                <img 
                  src="/real-3.jpg" 
                  alt="Дете играе" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="600"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-[#E4F22B] rounded-lg lg:rounded-xl px-2.5 lg:px-4 py-1 lg:py-2 shadow-lg">
                <p className="text-lg lg:text-2xl font-bold text-black">3+</p>
                <p className="text-[10px] lg:text-xs text-black/70">години</p>
              </div>
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-white rounded-lg lg:rounded-xl px-2 lg:px-3 py-1 lg:py-1.5 shadow-lg">
                <p className="text-base lg:text-xl font-bold text-[#0C6D3E]">50</p>
                <p className="text-[10px] lg:text-xs text-[#0C6D3E]/70">животни</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
