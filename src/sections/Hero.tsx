import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

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
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#FDFBF6] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#E4F22B] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#F6A377] rounded-full opacity-20 blur-3xl" />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E4F22B] rounded-full flex items-center justify-center">
              <span className="text-xl">🦁</span>
            </div>
            <span className="text-xl font-bold text-[#0C6D3E]" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Животинки
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-[#0C6D3E] hover:text-[#095a32] transition-colors">За продукта</a>
            <a href="#benefits" className="text-[#0C6D3E] hover:text-[#095a32] transition-colors">Предимства</a>
            <a href="#gallery" className="text-[#0C6D3E] hover:text-[#095a32] transition-colors">Галерия</a>
            <a href="#order" className="text-[#0C6D3E] hover:text-[#095a32] transition-colors">Поръчай</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="reveal opacity-0">
                <div className="inline-flex items-center gap-2 bg-[#E4F22B]/20 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 text-[#0C6D3E] fill-[#0C6D3E]" />
                  <span className="text-sm font-medium text-[#0C6D3E]">50 уникални животни за сглобяване</span>
                </div>
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C6D3E] leading-tight"
                  style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                >
                  Създай Своя
                  <span className="block text-[#F6A377]">Собствен Зоопарк!</span>
                </h1>
              </div>
              
              <p className="reveal opacity-0 text-lg text-[#0C6D3E]/80 max-w-lg stagger-1">
                50 очарователни картонени животни за сглобяване. Идеално за малки ръце и големи въображения! Развийте фината моторика и креативността на вашето дете по забавен начин.
              </p>
              
              <div className="reveal opacity-0 flex flex-wrap gap-4 stagger-2">
                <Button 
                  onClick={scrollToProduct}
                  className="btn-primary text-lg flex items-center gap-2"
                >
                  Разгледай Комплекта
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <a 
                  href="#order"
                  className="px-8 py-4 rounded-full border-2 border-[#0C6D3E] text-[#0C6D3E] font-semibold hover:bg-[#0C6D3E] hover:text-white transition-all duration-300"
                >
                  Поръчай Сега
                </a>
              </div>
              
              <div className="reveal opacity-0 flex items-center gap-6 stagger-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E4F22B] to-[#F6A377] border-2 border-white flex items-center justify-center text-xs font-bold"
                    >
                      {i === 4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-[#0C6D3E]">1000+ доволни семейства</p>
                  <p className="text-sm text-[#0C6D3E]/60">в България</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="reveal opacity-0 space-y-4 stagger-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/hero-child.jpg" 
                      alt="Дете играе с картонени животни" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/animal-lion.jpg" 
                      alt="Картонен лъв" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="reveal opacity-0 space-y-4 pt-8 stagger-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/animal-giraffe.jpg" 
                      alt="Картонен жираф" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/animal-elephant.jpg" 
                      alt="Картонен слон" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#E4F22B] rounded-2xl px-6 py-4 shadow-xl animate-float">
                <p className="text-2xl font-bold text-black">2+</p>
                <p className="text-sm text-black/70">години</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
